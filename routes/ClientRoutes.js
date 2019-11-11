const express = require('express');
const ClientController = require('../controller/ClientController');
const api = express.Router();

//Rutas de llantas
api.get('/index',ClientController.index);
api.post('/create',ClientController.save);
api.put('/update/:id',ClientController.update);
api.put('/delete/:id',ClientController.destroy);

module.exports = api;