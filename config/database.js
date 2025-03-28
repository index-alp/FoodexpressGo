
require("dotenv").config(); // Cargar variables de entorno
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("🔥 Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error conectando a MongoDB", error);
        process.exit(1); // Detener la app si hay error
    }
};

module.exports = connectDB;
