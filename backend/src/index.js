const path = require('path');
const server = require('express')();

require('dotenv').config({path: path.resolve(__dirname, '.env')});

server.listen(process.env.PORT, console.log(`Running server in ${process.env.PORT} port`))