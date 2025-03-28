document.addEventListener("DOMContentLoaded", async () => {
    const productList = document.getElementById("product-list");
    const addProductBtn = document.getElementById("addProduct");

    async function loadProducts() {
        const response = await fetch("/api/productos");
        const products = await response.json();

        productList.innerHTML = "";
        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${product.img}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="add-to-cart">Agregar al Carrito</button>
                <button class="delete-btn" data-id="${product._id}">Eliminar</button>
            `;
            productList.appendChild(card);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", async (event) => {
                const productId = event.target.dataset.id;
                await fetch(`/api/productos/${productId}`, { method: "DELETE" });
                loadProducts();
            });
        });
    }

    addProductBtn.addEventListener("click", async () => {
        const newProduct = { img: "default.jpg", title: "Nuevo Producto", price: "$0.00" };
        await fetch("/api/productos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        });
        loadProducts();
    });

    loadProducts();
});
