const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    carId: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
    
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;