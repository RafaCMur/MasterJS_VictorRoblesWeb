'use strict'

const express = require('express');
const ProjectController = require('../controllers/project');

const router = express.Router();

router.get('/home', ProjectController.home); // Utiliza el metodo home del controlador en la ruta /home
router.post('/test', ProjectController.test);

module.exports = router;
