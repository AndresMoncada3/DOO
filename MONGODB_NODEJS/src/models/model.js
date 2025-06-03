const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true, 
    },

    edad: {
        type: Number,
        require: true, 
    },

    Correo: {
        type: String,
        require: true, 
    }
});

module.exports = mongoose.model('models', modelSchema);