document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('productos-container');
    
    // Obtener la categoría de la URL (ej: productos.html?categoria=herramientas-manuales)
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');

    // Cargar productos desde JSON
    fetch('../Json/productos.json')
        .then(response => response.json())
        .then(productos => {
            // Filtrar por categoría
            const productosFiltrados = productos.filter(p => p.categoria === categoria);
            
            // Agrupar en bloques de 4 productos
            for (let i = 0; i < productosFiltrados.length; i += 4) {
                const grupo = productosFiltrados.slice(i, i + 4);
                
                // Crear fila de 4 productos
                const row = document.createElement('div');
                row.className = 'row g-4 mb-5 producto-grupo';
                
                grupo.forEach(producto => {
                    row.innerHTML += `
                        <div class="col-md-3">
                            <div class="card h-100 shadow-sm">
                                <img src="images/productos/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">$${producto.precio.toFixed(2)}</p>
                                    <p class="text-muted">Stock: ${producto.stock} unidades</p>
                                    <button class="btn btn-primary w-100 btn-comprar" data-id="${producto.id}">
                                        <i class="fas fa-shopping-cart me-2"></i> Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                container.appendChild(row);
                
                // Añadir separador cada 4 productos (excepto al final)
                if (i + 4 < productosFiltrados.length) {
                    const separador = document.createElement('hr');
                    separador.className = 'my-5 border-2';
                    container.appendChild(separador);
                }
            }

            // Evento para botones "Comprar"
            document.querySelectorAll('.btn-comprar').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idProducto = btn.getAttribute('data-id');
                    alert(`Producto ${idProducto} añadido al carrito`);
                    // Aquí puedes agregar lógica para el carrito
                });
            });
        });
});