const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

require('dotenv').config({path: path.resolve(__dirname, '..', '.env')});

//import routes
const devRouter = require('./routes/dev');

//app config
    app.use(cors());
    app.use(express.json());
    app.use(devRouter);


app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));