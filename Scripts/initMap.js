// Archivo: initMap.js

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
