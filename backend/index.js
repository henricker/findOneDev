const express = require('express');
const routes = require('./routes');
const server = express();

//config
    server.use(express.json());
    server.use(routes);

server.listen(3333, () => console.log("Server running!"));