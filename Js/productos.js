function guardarCategoria(event, element) {
    const categoriaId = element.getAttribute('data-id');
    const categoriaJSON = {
        categoria_seleccionada: parseInt(categoriaId)
    };

    console.log("JSON preparado:", categoriaJSON);

    // Si quieres enviar el JSON a una API, descomenta esto:
    // fetch('https://tudominio.com/api/categoria', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(categoriaJSON)
    // });
}