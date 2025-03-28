require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json()); 
app.use(express.static("public"));

// Rutas
app.use("/api/productos", require("./routes/productos"));

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

