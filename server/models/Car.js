const mongoose = require('mongoose');

const { Schema } = mongoose;

const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    price: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

