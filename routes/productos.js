const express = require("express");
const Producto = require("../models/Producto");

const router = express.Router();

// Obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

// Agregar un nuevo producto
router.post("/", async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (err) {
        res.status(400).json({ error: "Error al agregar el producto" });
    }
});

// Eliminar un producto
router.delete("/:id", async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.json({ message: "Producto eliminado" });
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
});

module.exports = router;
