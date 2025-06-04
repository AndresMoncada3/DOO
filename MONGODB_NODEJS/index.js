const express = require('express'); //solicita el express y los asigna a una constante llamada express
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require("./src/routes/user");

//=====================
const app =express(); 
const PORT =process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use('/api', userRoutes);



//routes
app.get('/', (req, res) => {
    res.send('NUEVA API')
} )

// Conección a mongodb

try {
  app.listen(9000, () => {
    console.log("Servidor Activo En: 9000");
  });
} catch (error) {
  console.error("Error al iniciar el servidor:", error);
}

mongoose.connect(process.env.USERDB).then(()=>console.log("Conectado a MongoDB Atlas ")); 

app.listen(PORT, () => console.log('Servidor Activo En:' + ' ', PORT));

