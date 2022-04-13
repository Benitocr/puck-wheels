const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:3001/still-peak-39563');

module.exports = mongoose.connection;