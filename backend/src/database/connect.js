//mongoose connection
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true );
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_CONNECT)
.then(() => console.log("Connect to db!"))
.catch((err) => console.log(`Error ${err}`));

module.exports = mongoose;