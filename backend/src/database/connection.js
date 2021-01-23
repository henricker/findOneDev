const mongoose = require('mongoose');
const configDb = require('../config/db');



mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


mongoose.connect(configDb.mongoUri);

module.exports = mongoose;
