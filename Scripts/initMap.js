// Archivo: initMap.js

// Datos hardcodeados de mascotas (offsets relativos al centro del mapa)
var SAMPLE_PETS = [
    {
        name: 'Bobby',
        description: 'Perro mestizo, amigable y juguetón. Visto cerca del parque.',
        color: 'Marrón',
        gender: 'M',
        address: 'Av. Reforma 123',
        offsetLat:  0.012, offsetLng:  0.008,
        statusId: 0,
        imageURL: './images/perro.jpg'
    },
    {
        name: 'Luna',
        description: 'Hembra pequeña, collar rojo. Muy asustadiza.',
        color: 'Blanco y negro',
        gender: 'F',
        address: 'Calle Pino 45',
        offsetLat: -0.006, offsetLng:  0.015,
        statusId: 1,
        imageURL: './images/success-1.jpg'
    },
    {
        name: 'Rocky',
        description: 'Macho grande, raza labrador. Lleva placa con número.',
        color: 'Dorado',
        gender: 'M',
        address: 'Plaza Central',
        offsetLat:  0.004, offsetLng: -0.011,
        statusId: 0,
        imageURL: './images/success-2.jpg'
    },
    {
        name: 'Maya',
        description: 'Cachorra muy juguetona, encontrada deambulando.',
        color: 'Café claro',
        gender: 'F',
        address: 'Calle Sauces 78',
        offsetLat: -0.014, offsetLng: -0.005,
        statusId: 1,
        imageURL: './images/success-3.jpg'
    },
    {
        name: 'Toby',
        description: 'Perro mediano, posiblemente perdido hace varios días.',
        color: 'Negro',
        gender: 'M',
        address: 'Av. Insurgentes 200',
        offsetLat:  0.009, offsetLng: -0.018,
        statusId: 0,
        imageURL: './images/perro.jpg'
    },
    {
        name: 'Nala',
        description: 'Reportada por vecinos cerca de la escuela primaria.',
        color: 'Atigrado',
        gender: 'F',
        address: 'Calle Magnolia 12',
        offsetLat: -0.010, offsetLng:  0.020,
        statusId: 1,
        imageURL: './images/success-1.jpg'
    }
];

// Función para inicializar el mapa
function initMap() {
    // Coordenadas iniciales para centrar el mapa
    var centroMapa = { lat: 0, lng: 0 };

    // Mostrar animación de carga mientras se carga el mapa
    showLoadingAnimation().then(function() {
        // Obtener la ubicación del usuario
        getLocalization(function(location) {
            centroMapa = location;
            // Crear el mapa con las coordenadas obtenidas
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: centroMapa
            });

            // Agregar evento de doble clic derecho para mostrar formulario
            map.addListener('rightclick', function(event) {
                showForm(event.latLng, map);
            });

            // Cargar mascotas hardcodeadas relativas al centro del mapa
            SAMPLE_PETS.forEach(function(pet) {
                var perrito = {
                    name: pet.name,
                    description: pet.description,
                    color: pet.color,
                    gender: pet.gender,
                    address: pet.address,
                    latitude: centroMapa.lat + pet.offsetLat,
                    longitude: centroMapa.lng + pet.offsetLng,
                    statusId: pet.statusId,
                    imageURL: pet.imageURL
                };

                var marker = new google.maps.Marker({
                    position: { lat: perrito.latitude, lng: perrito.longitude },
                    map: map,
                    title: perrito.name,
                    description: perrito.description,
                    statusId: perrito.statusId
                });

                markers.push(marker);

                marker.addListener('click', function() {
                    $('#modalImage').attr('src', perrito.imageURL);
                    $('#modalName').text(perrito.name);
                    $('#modalDescription').text(perrito.description);
                    $('#myModal').modal('show');
                });
            });
        });
    }).finally(function() {
        // Ocultar animación de carga después de cargar el mapa
        hideLoadingAnimation();
    });
}
