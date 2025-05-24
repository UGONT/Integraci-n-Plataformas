function seleccionarCategoria(event, element) {
    event.preventDefault();
    const tipo = element.dataset.id;

    // Guarda el tipo en localStorage
    localStorage.setItem("categoriaTipo", tipo);

    // Redirige a la vista de productos
    window.location.href = "../Vista_Producto/productos.html";
}

