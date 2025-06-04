const express = require("express");
const modelSchema = require("../models/model.js");

const router = express.Router();

// Crear Usuario
router.post("/users", (req,res) => {
    const user = modelSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({message: error.message}));
});

// Obtener todos los usuarios
router.get("/users", (req,res) => {
    modelSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({message: error.message}));
});

// Obtener un usuario
router.get("/users/:id", (req,res) => {
    const {id} = req.params;
    modelSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({message: error.message}));
});

// Actualizar un usuario
router.put("/users/:id", (req,res) => {
    const { id } = req.params;
    const { nombre, edad, correo } = req.body;
    modelSchema
    .updateOne({_id: id}, { $set: {nombre, edad, correo} })
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({message: error.message}));
});

// Eliminar un usuario
router.delete("/users/:id", (req,res) => {
    const { id } = req.params;
    modelSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({message: error.message}));
});

module.exports = router; 