// Archivo: markers.js

// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Función para agregar un nuevo marcador a la base de datos
function addPet() {
    var formData = {
        name: $('#name').val(),
        description: $('#description').val(),
        color: $('#color').val(),
        gender: $('#gender').val(),
        address: $('#address').val(),
        imageURL: $('#image').val(),
        latitude: parseFloat($('#latitude').val()), // Asegúrate de convertir a número
        longitude: parseFloat($('#longitude').val()) // Asegúrate de convertir a número
    };

    $.ajax({
        url: 'https://localhost:7200/Pets',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function (response) {
            console.log('Marcador agregado exitosamente');
            // Agregar marcador al mapa si el POST fue exitoso
            var marker = new google.maps.Marker({
                position: { lat: formData.latitude, lng: formData.longitude },
                map: map,
                title: formData.name
            });
            // Agregar evento de clic izquierdo para mostrar detalle del marcador
            marker.addListener('click', function () {
                $('#modalImage').attr('src', formData.imageURL); // Asigna la URL de la imagen al modal
                $('#modalName').text(formData.name); // Asigna el nombre al modal
                $('#modalDescription').text(formData.description); // Asigna la descripción al modal
                $('#myModal').modal('show'); // Abre el modal
            });
            // Agregar el marcador al array de marcadores
            markers.push(marker);
        },
        error: function (xhr, status, error) {
            console.error('Error al agregar marcador: ', error);
        }
    });
}

// Función para filtrar marcadores por búsqueda
function filterMarkers(searchText) {
    // Iterar sobre los marcadores y mostrar/ocultar según el texto de búsqueda
    markers.forEach(function (marker) {
        var name = marker.title.toLowerCase(); // Obtener el nombre del marcador en minúsculas
        var description = marker.description.toLowerCase(); // Obtener la descripción del marcador en minúsculas
        if (name.includes(searchText) || description.includes(searchText)) {
            marker.setVisible(true); // Mostrar el marcador si el nombre o descripción contiene el texto de búsqueda
        } else {
            marker.setVisible(false); // Ocultar el marcador si el nombre o descripción no contiene el texto de búsqueda
        }
    });
}
