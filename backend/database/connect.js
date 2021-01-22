const mongoose = require('mongoose');

const connection = mongoose.connect(`mongodb+srv://henricker:<${process.env.MONGO_PASSWORD}>@cluster0.qwe3q.mongodb.net/<dbname>?retryWrites=true&w=majority`);

module.exports = connection;