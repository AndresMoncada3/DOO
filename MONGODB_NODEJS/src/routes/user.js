const express = require("express");

const router = express.Router();

// Crear Usuario
router.post("/users", (req,res) => {
    res.send("Crear usuario");
});

module.exports = router;