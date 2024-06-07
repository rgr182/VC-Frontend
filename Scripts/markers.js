// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Función para cargar una imagen al servidor
function uploadImage(file, PetId) {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('PetId', PetId);

    return $.ajax({
        url: 'https://localhost:7200/api/Images/Upload',
        method: 'POST',
        processData: false,
        contentType: false,
        data: formData,
        success: function (response) {
            console.log('Imagen cargada exitosamente:', response);
        },
        error: function (xhr, status, error) {
            console.error('Error al cargar la imagen:', error);
            console.log('Detalles del error:', xhr.responseText);
        }
    });
}

// Función para agregar un nuevo marcador a la base de datos
function addPet() {
    var PetId = parseInt($('#petId').val(), 10);
    var fileInput = $('#fileInput')[0].files[0];
    var petData = {
        name: $('#name').val(),
        description: $('#description').val(),
        color: $('#color').val(),
        gender: $('#gender').val(),
        address: $('#address').val(),
        latitude: parseFloat($('#latitude').val()),
        longitude: parseFloat($('#longitude').val()),
        createDate: new Date().toISOString(),
        status: localStorage.getItem('userChoice') === 'buscando' ? true : false,
    };

    $.ajax({
        url: 'https://localhost:7200/Pets',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(petData),
        success: function (response) {
            console.log('Mascota agregada exitosamente');
            var marker = new google.maps.Marker({
                position: { lat: petData.latitude, lng: petData.longitude },
                map: map,
                title: petData.name,
                description: petData.description,
            });
            marker.addListener('click', function () {
                $('#modalImage').attr('src', petData.imageURL);
                $('#modalName').text(petData.name);
                $('#modalDescription').text(petData.description);
                $('#myModal').modal('show');
            });
            markers.push(marker);

            // Subir la imagen
            if (fileInput) {
                uploadImage(fileInput, PetId)
                    .done(function(response) {
                        console.log('Imagen cargada exitosamente:', response);
                    })
                    .fail(function(xhr, status, error) {
                        console.error('Error al cargar la imagen:', error);
                        console.log('Detalles del error:', xhr.responseText);
                    });
            }
        },
        error: function (xhr, status, error) {
            console.error('Error al agregar mascota:', error);
            console.log('Detalles del error:', xhr.responseText);
        }
    });
}

// Función para filtrar marcadores por búsqueda
function filterMarkers(searchText) {
    markers.forEach(function (marker) {
        var name = marker.title.toLowerCase();
        var description = marker.description.toLowerCase();
        if (name.includes(searchText) || description.includes(searchText)) {
            marker.setVisible(true);
        } else {
            marker.setVisible(false);
        }
    });
}

// Agregar el listener para evitar el menú contextual del clic derecho
$(document).ready(function () {
    $('#map').on('contextmenu', function (event) {
        event.preventDefault();
    });
});
