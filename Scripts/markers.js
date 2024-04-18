// Archivo: markers.js

// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Función para agregar un nuevo marcador a la base de datos
function addPet() {
    var formData = new FormData(); // Usar FormData para manejar archivos

    formData.append('name', $('#name').val());
    formData.append('description', $('#description').val());
    formData.append('color', $('#color').val());
    formData.append('gender', $('#gender').val());
    formData.append('address', $('#address').val());
    formData.append('latitude', parseFloat($('#latitude').val()));
    formData.append('longitude', parseFloat($('#longitude').val()));
    formData.append('image', $('#image')[0].files[0]); // Agregar el archivo de imagen

    $.ajax({
        url: 'https://localhost:7200/Pets',
        method: 'POST',
        processData: false, // No procesar datos (FormData se encarga de eso)
        contentType: false, // No establecer encabezado Content-Type (FormData se encarga de eso)
        data: formData,
        success: function (response) {
            console.log('Marcador agregado exitosamente');
            // Agregar marcador al mapa si el POST fue exitoso
            var marker = new google.maps.Marker({
                position: { lat: formData.get('latitude'), lng: formData.get('longitude') },
                map: map,
                title: formData.get('name')
            });
            // Agregar evento de clic izquierdo para mostrar detalle del marcador
            marker.addListener('click', function () {
                $('#modalImage').attr('src', URL.createObjectURL(formData.get('image'))); // Obtener URL de la imagen
                $('#modalName').text(formData.get('name')); // Asigna el nombre al modal
                $('#modalDescription').text(formData.get('description')); // Asigna la descripción al modal
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
