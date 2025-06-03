const express = require("express");
const modelSchema = require("../models/model.js");

const router = express.Router();

// Crear Usuario
router.post("/users", (req,res) => {
    const user = modelSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;