const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/puck-wheels');

module.exports = mongoose.connection;