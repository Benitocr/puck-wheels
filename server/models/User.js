const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
// const WishList = require('./WishList');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Needs valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    wishList: [
      {
        type: Schema.Types.ObjectId,
        ref: "Car",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);



userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;