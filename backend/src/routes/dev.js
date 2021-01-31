const routes = require('express').Router();

//import controllers
const devController = require('../app/controllers/devController');

routes.post('/dev', devController.store);
routes.get('/index', devController.index);

module.exports = routes;

