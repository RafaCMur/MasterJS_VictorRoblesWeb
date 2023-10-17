'use strict'

const express = require('express');
const ProjectController = require('../controllers/project');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // you can define custom storage options


const router = express.Router();

router.get('/home', ProjectController.home); // Utiliza el metodo home del controlador en la ruta /home
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', ProjectController.uploadImage);
router.post('/upload-image/:id', upload.single('image'), ProjectController.uploadImage);

module.exports = router;
