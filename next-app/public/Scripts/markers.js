// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Stub local: no se sube al servidor, solo se genera una data URL para mostrar la imagen en el mapa
function uploadImage(file, PetId) {
    return new Promise(function (resolve) {
        if (!file) {
            resolve({ url: null });
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log('Imagen procesada localmente para PetId:', PetId);
            resolve({ url: e.target.result });
        };
        reader.readAsDataURL(file);
    });
}

// Agrega un nuevo marcador en memoria (sin backend)
function addPet() {
    var PetId = parseInt($('#petId').val(), 10);
    var fileInput = $('#fileInput')[0] ? $('#fileInput')[0].files[0] : null;
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

    uploadImage(fileInput, PetId).then(function (imgResult) {
        petData.imageURL = imgResult.url || '/images/perro.jpg';

        console.log('Mascota agregada exitosamente (local):', petData);
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
