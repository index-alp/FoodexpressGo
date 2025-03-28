const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true }
});

module.exports = mongoose.model("Producto", ProductoSchema);
