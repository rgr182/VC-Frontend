// Archivo: main.js

// Ejecutar el código una vez que el documento esté completamente cargado
$(document).ready(function () {
    // Llamar a la función para inicializar el mapa
    initMap();

    // Agregar evento de cambio en el campo de búsqueda
    $('#searchInput').on('input', function () {
        var searchText = $(this).val().toLowerCase(); // Obtener el texto de búsqueda en minúsculas
        filterMarkers(searchText); // Llamar a la función de filtrado de marcadores
    });
});
