// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Función para cargar una imagen al servidor
function uploadImage(file) {
    var formData = new FormData();
    formData.append('file', file);

    return $.ajax({
        url: 'https://localhost:7079/api/Files/upload',
        method: 'POST',
        processData: false,
        contentType: false,
        data: formData
    });
}

// Función para agregar un nuevo marcador a la base de datos
function addPet() {
    var fileInput = $('#fileInput')[0].files[0];
    var petData = {
        name: $('#name').val(),
        description: $('#description').val(),
        color: $('#color').val(),
        gender: $('#gender').val(),
        address: $('#address').val(),
        latitude: parseFloat($('#latitude').val()),
        longitude: parseFloat($('#longitude').val())
    };

    uploadImage(fileInput)
        .then(function (response) {
            // Si la carga de la imagen es exitosa, añade la URL de la imagen a petData
            petData.imageURL = response.url;
            // Continúa con la llamada para agregar la mascota
            $.ajax({
                url: 'https://localhost:7200/Pets',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(petData),
                success: function (response) {
                    console.log('Mascota agregada exitosamente');
                    // Agregar marcador al mapa si el POST fue exitoso
                    var marker = new google.maps.Marker({
                        position: { lat: petData.latitude, lng: petData.longitude }, // Usar petData en lugar de formData
                        map: map,
                        title: petData.name,
                        description: petData.description // Agregar descripción como propiedad del marcador
                    });
                    // Agregar evento de clic izquierdo para mostrar detalle del marcador
                    marker.addListener('click', function () {
                        $('#modalImage').attr('src', petData.imageURL); // Usar petData en lugar de formData
                        $('#modalName').text(petData.name); // Usar petData en lugar de formData
                        $('#modalDescription').text(petData.description); // Usar petData en lugar de formData
                        $('#myModal').modal('show'); // Abre el modal
                    });
                    // Agregar el marcador al array de marcadores
                    markers.push(marker);
                },
                error: function (xhr, status, error) {
                    console.error('Error al agregar mascota: ', error);
                }
            });
        })
        .catch(function (error) {
            console.error('Error al cargar la imagen: ', error);
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
