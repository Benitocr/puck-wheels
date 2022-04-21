const mongoose = require('mongoose');

const { Schema } = mongoose;

const wishListSchema = new Schema({
  // purchaseDate: {
  //   type: Date,
  //   default: Date.now
  // },
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Car'
    }
  ]
});

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;