//mongoose connection
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true );
mongoose.connect(process.env.MONGO_CONNECT);

module.exports = mongoose;