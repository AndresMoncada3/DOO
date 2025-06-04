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

    correo: {
        type: String,
        require: true, 
    }
});

module.exports = mongoose.model('model', modelSchema);