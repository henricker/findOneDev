const routes = require('express').Router();

//import controllers
const devController = require('../app/controllers/devController');

routes.post('/dev', devController.store);

module.exports = routes;

