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

module.exports = carSchema;