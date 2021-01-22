const routes = require('express').Router();

routes.post('/create', (request, response) => {
    response.send({ok: "true"});
})

module.exports = routes;