'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// cargar archivos rutas
const project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());  // Convertir a json los datos que llegan por http

// CORS

// rutas
app.use('/api', project_routes); // Las rutas seran /api/home y /api/test


module.exports = app;
