function guardarCategoria(event, element) {
    const categoriaId = element.getAttribute('data-id');
    const categoriaJSON = {
        categoria_seleccionada: parseInt(categoriaId)
    };

    console.log("JSON preparado:", categoriaJSON);

    // Guardar en localStorage (opcional)
    localStorage.setItem('categoriaSeleccionada', JSON.stringify(categoriaJSON));

    // Enviar a la API si es necesario
    // fetch('https://tudominio.com/api/categoria', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(categoriaJSON)
    // });
}
