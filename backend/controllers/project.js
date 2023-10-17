"use strict";

const project = require("../models/project");
const Project = require("../models/project");
const fs = require("fs");

async function updateImage () {
  try {
    const update = { image: fileName };
    const projectUpdated = await Project.findByIdAndUpdate(projectId, update, { new: true });
    if (!projectUpdated) return res.status(404).send({ message: "No existe el proyecto para actualizar" });
    return res.status(200).send({ project: projectUpdated });
  } catch (error) {
    return res.status(500).send({ message: "Error al actualizar" });
  }
};

const controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: "Soy la home",
    });
  },

  test: function (req, res) {
    res.status(200).send({
      message: "Soy el metodo o accion test del controlador de project",
    });
  },

  /**
   * Guarda un proyecto en la base de datos
   */
  saveProject: async function (req, res) {
    try {
      const project = new Project(); //Crear una instancia del modelo Project (ver models/project.js)
      const params = req.body;
      project.name = params.name;
      project.description = params.description;
      project.category = params.category;
      project.year = params.year;
      project.langs = params.langs;
      project.image = null;

      const projectStored = await project.save(); //Guardar el proyecto en la BD

      if (!projectStored) {
        return res
          .status(404)
          .send({ message: "No se ha podido guardar el proyecto en la BD" });
      }
      return res.status(200).send({ project: projectStored });
    } catch (error) {
      if (err)
        return res
          .status(500)
          .send({ message: "Error al guardar el proyecto en la BD" });
    }
  },

  getProject: async function (req, res) {
    try {
      const projectId = req.params.id;
      if (projectId == null)
        return res
          .status(404)
          .send({ message: "El proyecto no existe porque projectID es null." });

      const project = await Project.findById(projectId);
      if (!project)
        return res.status(404).send({ message: "El proyecto no existe." });
      return res.status(200).send({
        project,
      });
    } catch (error) {
      return res.status(500).send({ message: "Error al devolver los datos" });
    }
  },

  getProjects: async function (req, res) {
    try {
      const projects = await Project.find({}).sort("-year"); //Ordena los proyectos por año de mayor a menor
      if (!projects)
        return res.status(404).send({ message: "No hay proyectos para mostrar" });
      return res.status(200).send({ projects });
    } catch (error) {
      return res.status(500).send({ message: "Error al devolver los datos" });
    }
  },

  updateProject: async function (req, res) {
    try {
      const projectId = req.params.id;
      const update = req.body;
      const projectUpdated = await Project.findByIdAndUpdate(projectId, update, { new: true });
      if (!projectUpdated) return res.status(404).send({ message: "No existe el proyecto para actualizar" });
      return res.status(200).send({ project: projectUpdated });
    } catch (error) {
      return res.status(500).send({ message: "Error al actualizar" });
    }
  },

  deleteProject: async function (req, res) {
    try {
      const projectId = req.params.id;
      const projectRemoved = await Project.findByIdAndRemove(projectId);
      if (!projectRemoved) return res.status(404).send({ message: "No existe el proyecto para eliminar" });
      return res.status(200).send({ project: projectRemoved });
    } catch (error) {
      return res.status(500).send({ message: "Error al eliminar" });
    }
  },

  uploadImage: async function (req, res) {
    try {
      const projectId = req.params.id;
      var fileName = "Imagen no subida...";

      if (req.files) {
        const filePath = req.files.image.path;
        const fileSplit = filePath.split("/");
        fileName = fileSplit[1];
        const extSplit = fileName.split("\.");
        var fileExt = extSplit[1];

        if (fileExt === "png" || fileExt === "jpg" || fileExt === "jpeg" || fileExt === "gif") {
          try {
            const update = { image: fileName };
            const projectUpdated = await Project.findByIdAndUpdate(projectId, update, { new: true });
            if (!projectUpdated) return res.status(404).send({ message: "No existe el proyecto para actualizar" });
            return res.status(200).send({ project: projectUpdated });
          } catch (error) {
            return res.status(500).send({ message: "Error al actualizar" });
          }
        } else {
          fs.unlink(filePath, (err) => {
            if (err) {
              return res.status(500).send({ message: "Error deleting the file" });
            }
            return res.status(200).send({ message: "La extensión no es válida" });
          });          
        }
      } else {
        return res.status(200).send({ message: fileName });
      }
    } catch (error) {
      return res.status(500).send({ message: "Error al subir la imagen" });
    }
  }
};

module.exports = controller;
