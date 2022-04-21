const { AuthenticationError } = require('apollo-server-express');
const { User, Car, Category, WishList } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    cars: async (parent, { category, year }) => {
      const params = {};
      console.log(category, year);
      if (category) {
        params.category = category;
      }

      if (year) {
        params.year = year;
      }

      const carData = await Car.find(params).populate("category");
      return carData;
    },
    car: async (parent, { _id }) => {
      return await Car.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      console.log("USER RESOLVER")
      if (context.user) {
        const user = await User.findById(context.user._id).populate("wishList");
console.log(user);
        user.wishList.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    wishList: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "wishList.cars",
          populate: "category",
        });

        return user.wishList.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addWishList: async (parent, { car }, context) => {
      // console.log(context);
      if (context.user) {
        // const wishList = new WishList({ cars });
        const wishList = await User.findByIdAndUpdate(context.user._id, {
          $addToSet: { wishList: car },
        });

        return wishList;
      }

      throw new AuthenticationError("Not logged in");
    },
    removeWishList: async (parent, { car }, context) => {
      // console.log(context);
      if (context.user) {
        // const wishList = new WishList({ cars });
        const wishList = await User.findByIdAndUpdate(context.user._id, {
          $pull: { wishList: car },
        });

        return wishList;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateCar: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Car.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
    removeCar: async (parent, { carId }) => {
      return await Car.findByIdAndDelete(carId);
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
}; 

module.exports = resolvers;