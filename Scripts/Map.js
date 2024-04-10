// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Función para inicializar el mapa
function initMap() {
    // Coordenadas iniciales para centrar el mapa
    var centroMapa = { lat: 0, lng: 0 };

    // Obtener la ubicación del usuario
    getLocalization(function (location) {
        centroMapa = location;
        // Crear el mapa con las coordenadas obtenidas
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: centroMapa
        });

        // Agregar evento de doble clic derecho para mostrar formulario
        map.addListener('rightclick', function (event) {
            showForm(event.latLng, map);
        });

        // Lógica para obtener las coordenadas de los perritos del API y mostrarlos en el mapa
        $.ajax({
            url: 'https://localhost:7200/Pets',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                data.forEach(function (perrito) {
                    var marker = new google.maps.Marker({
                        position: { lat: perrito.latitude, lng: perrito.longitude },
                        map: map,
                        title: perrito.name,
                        description: perrito.description
                    });

                    // Agregar el marcador al array de marcadores
                    markers.push(marker);

                    // Agregar evento de clic izquierdo para mostrar detalle del marcador
                    marker.addListener('click', function () {
                        $('#modalImage').attr('src', perrito.imageURL); // Asigna la URL de la imagen al modal
                        $('#modalName').text(perrito.name); // Asigna el nombre al modal
                        $('#modalDescription').text(perrito.description); // Asigna la descripción al modal
                        $('#myModal').modal('show'); // Abre el modal
                    });
                });
            },
            error: function (xhr, status, error) {
                console.error('Error al obtener datos del API: ', error);
            }
        });
    });
}

// Función para obtener la ubicación del usuario
function getLocalization(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("Latitude: " + latitude + ", Longitude: " + longitude);
            callback({ lat: latitude, lng: longitude });
        }, function (error) {
            console.error('Error al obtener la ubicación del usuario: ', error);
            callback({ lat: 0, lng: 0 });
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        callback({ lat: 0, lng: 0 });
    }
}

// Función para mostrar el formulario
function showForm(location, map) {
    // Verificar si ya hay un formulario abierto
    if (formularioAbierto) {
        return; // No hacer nada si ya hay un formulario abierto
    }

    // Resto del código para mostrar el formulario...

    // Al abrir el formulario, establecer formularioAbierto como true
    formularioAbierto = true;

    // Crear el formulario HTML
    var form = '<form id="petForm">' +
        '<label for="name">Nombre:</label>' +
        '<input type="text" id="name" name="name" value="Bobby"><br>' +
        '<label for="description">Descripción:</label>' +
        '<textarea id="description" name="description">Perro amigable y juguetón</textarea><br>' +
        '<label for="color">Color:</label>' +
        '<input type="text" id="color" name="color" value="Marrón"><br>' +
        '<label for="gender">Género:</label>' +
        '<input type="text" id="gender" name="gender" value="M"><br>' +
        '<label for="address">Dirección:</label>' +
        '<input type="text" id="address" name="address" value="Calle Principal, 123"><br>' +
        '<label for="image">Image:</label>' +
        '<input type="text" id="image" name="image" value="test.jpg"><br>' +
        '<input type="hidden" id="latitude" name="latitude" value="' + location.lat() + '">' +
        '<input type="hidden" id="longitude" name="longitude" value="' + location.lng() + '">' +
        '<button id="agregarBtn" onclick="submitForm()">Agregar</button>' +
        '</form>';

    // Mostrar el formulario en un InfoWindow en la posición del clic derecho
    var infowindow = new google.maps.InfoWindow({
        content: form
    });

    // Cerrar ventana de información actual si existe
    if (currentInfoWindow !== null) {
        currentInfoWindow.close();
    }

    // Mostrar InfoWindow en la posición del clic derecho
    infowindow.setPosition(location);
    infowindow.open(map);
    currentInfoWindow = infowindow;

    // Cerrar el formulario y restablecer la variable formularioAbierto al cerrar el InfoWindow sin enviar el formulario
    google.maps.event.addListener(infowindow, 'closeclick', function () {
        formularioAbierto = false;
    });
}

// Función para enviar el formulario
function submitForm() {
    addPet(); // Llama a la función que agrega la mascota
    formularioAbierto = false; // Establecer el estado del formulario como cerrado
    currentInfoWindow.close(); // Cierra el InfoWindow después de enviar el formulario
}

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
