// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Función para cargar una imagen al servidor
function uploadImage(file, petId) {
    var formData = new FormData();
    formData.append('file', file);
    formData.append('petId', petId); // Añadir el petId al FormData

    return $.ajax({
        url: 'https://localhost:7079/api/Images/Upload',
        method: 'POST',
        processData: false,
        contentType: false,
        data: formData
    });
}

// Función para agregar un nuevo marcador a la base de datos
function addPet(petData) {
    return $.ajax({
        url: 'https://localhost:7200/Pets',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(petData)
    });
}

// Función para mostrar el formulario
function showForm(location, map) {
    // Verificar si ya hay un formulario abierto
    if (formularioAbierto) {
        return; // No hacer nada si ya hay un formulario abierto
    }

    // Mostrar animación de carga
    showLoadingAnimation().then(function () {
        // Al abrir el formulario, establecer formularioAbierto como true
        formularioAbierto = true;

        // Crear el formulario HTML    
        var form = '<form id="petForm" style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="name" style="display: block; font-weight: bold;">Nombre:</label>' +
            '<input type="text" id="name" name="name" value="Bobby" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="description" style="display: block; font-weight: bold;">Descripción:</label>' +
            '<textarea id="description" name="description" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">Perro amigable y juguetón</textarea>' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="color" style="display: block; font-weight: bold;">Color:</label>' +
            '<input type="text" id="color" name="color" value="Marrón" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="gender" style="display: block; font-weight: bold;">Género:</label>' +
            '<input type="text" id="gender" name="gender" value="M" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="address" style="display: block; font-weight: bold;">Dirección:</label>' +
            '<input type="text" id="address" name="address" value="Calle Principal, 123" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="image" style="display: block; font-weight: bold;">Imagen:</label>' +
            '<input type="file" id="fileInput" name="fileInput" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<input type="hidden" id="latitude" name="latitude" value="' + location.lat() + '">' +
            '<input type="hidden" id="longitude" name="longitude" value="' + location.lng() + '">' +
            '<button type="button" id="agregarBtn" onclick="submitForm()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 3px; cursor: pointer;">Agregar</button>' +
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

        // Ocultar animación de carga después de mostrar el formulario
        hideLoadingAnimation();
    });
}

// Función para enviar el formulario
function submitForm() {
    // Verificar si se ha cargado una imagen
    var fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('La imagen es obligatoria.'); // Mostrar mensaje de alerta
        return; // Salir de la función si no se ha cargado ninguna imagen
    }

    // Mostrar animación de carga
    showLoadingAnimation().then(function () {
        // Recoger los datos del formulario
        var petData = {
            name: $('#name').val(),
            description: $('#description').val(),
            color: $('#color').val(),
            gender: $('#gender').val(),
            address: $('#address').val(),
            latitude: parseFloat($('#latitude').val()),
            longitude: parseFloat($('#longitude').val())
        };

        // Subir los datos de la mascota
        addPet(petData)
            .then(function (response) {
                var petId = response.petId; // Obtener el petId de la respuesta de la API

                // Subir la imagen junto con el petId
                return uploadImage($('#fileInput')[0].files[0], petId);
            })
            .then(function (response) {
                console.log('Mascota y imagen agregadas exitosamente');
                // Agregar marcador al mapa si el POST fue exitoso
                var marker = new google.maps.Marker({
                    position: { lat: petData.latitude, lng: petData.longitude },
                    map: map,
                    title: petData.name,
                    description: petData.description
                });
                // Agregar evento de clic izquierdo para mostrar detalle del marcador
                marker.addListener('click', function () {
                    $('#modalName').text(petData.name);
                    $('#modalDescription').text(petData.description);
                    $('#myModal').modal('show');
                });
                // Agregar el marcador al array de marcadores
                markers.push(marker);
                formularioAbierto = false; // Establecer el estado del formulario como cerrado
                currentInfoWindow.close(); // Cierra el InfoWindow después de enviar el formulario

                // Ocultar animación de carga después de enviar el formulario
                hideLoadingAnimation();
            })
            .catch(function (error) {
                console.error('Error al agregar mascota o imagen: ', error);
                // Ocultar animación de carga después del error
                hideLoadingAnimation();
            });
    });
}

// Función para mostrar la animación de carga
function showLoadingAnimation() {
    return new Promise(function (resolve, reject) {
        var loadingAnimation = document.createElement('div');
        loadingAnimation.innerHTML = 'Cargando...'; // Puedes personalizar el mensaje de carga aquí
        loadingAnimation.style.position = 'absolute';
        loadingAnimation.style.top = '0';
        loadingAnimation.style.left = '0';
        loadingAnimation.style.width = '100%';
        loadingAnimation.style.height = '100%';
        loadingAnimation.style.display = 'flex';
        loadingAnimation.style.justifyContent = 'center';
        loadingAnimation.style.alignItems = 'center';
        loadingAnimation.style.background = 'rgba(0, 0, 0, 0.5)';
        loadingAnimation.style.color = '#fff';
        loadingAnimation.style.padding = '20px';
        loadingAnimation.style.borderRadius = '5px';
        loadingAnimation.style.zIndex = '9999';
        loadingAnimation.classList.add('loading-animation'); // Agrega la clase 'loading-animation' al elemento
        document.getElementById('map').appendChild(loadingAnimation); // Adjunta el elemento al contenedor del mapa

        // Resuelve la promesa después de un corto retraso para que la animación se muestre correctamente
        setTimeout(function () {
            resolve();
        }, 10);
    });
}

// Función para ocultar la animación de carga de forma asincrónica
function hideLoadingAnimation() {
    return new Promise(function (resolve, reject) {
        var loadingAnimation = document.querySelector('.loading-animation');
        if (loadingAnimation) {
            loadingAnimation.parentNode.removeChild(loadingAnimation);
        }

        // Resuelve la promesa después de un corto retraso para que la animación se oculte correctamente
        setTimeout(function () {
            resolve();
        }, 10);
    });
}

// Agregar el listener para evitar el menú contextual del clic derecho
$(document).ready(function () {
    $('#map').on('contextmenu', function (event) {
        event.preventDefault();
    });
});
