// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores

// Función para agregar un nuevo marcador a la base de datos
function addPet() {
    var petData = {
        name: $('#name').val(),
        description: $('#description').val(),
        color: $('#color').val(),
        gender: $('#gender').val(),
        address: $('#address').val(),
        latitude: parseFloat($('#latitude').val()),
        longitude: parseFloat($('#longitude').val()),
        createDate: new Date().toISOString(),
        status: localStorage.getItem('userChoice') === 'buscando' ? 0 : 1,
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
        },
        error: function (xhr, status, error) {
            console.error('Error al agregar mascota: ', error);
        }
    });
}

// Función para mostrar el formulario
function showForm(location, map) {
    if (formularioAbierto) {
        return;
    }

    showLoadingAnimation().then(function () {
        formularioAbierto = true;

        var form = '<form id="petForm" style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="name" style="display: block; font-weight: bold;">Nombre:</label>' +
            '<input type="text" id="name" name="name" value="Bobby" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="description" style="display: block; font-weight: bold;">Descripción:</label>' +
            '<textarea id="description" name="description" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">Perro amigable y juguetón</textarea>' +
            '</div>' +
            '<div style="display: grid; grid-template-columns: 0.5fr 0.5fr; gap: 10px; margin-bottom: 10px;">' +
            '<div>' +
            '<label for="color" style="display: block; font-weight: bold;">Color:</label>' +
            '<input type="text" id="color" name="color" value="Marrón" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div>' +
            '<label for="gender" style="display: block; font-weight: bold;">Género:</label>' +
            '<input type="text" id="gender" name="gender" value="M" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="address" style="display: block; font-weight: bold;">Dirección:</label>' +
            '<input type="text" id="address" name="address" value="Calle Principal, 123" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="petId" style="display: block; font-weight: bold;">Pet ID:</label>' +
            '<input type="text" id="petId" name="petId" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<div style="margin-bottom: 10px;">' +
            '<label for="fileInput" style="display: block; font-weight: bold;">Imagen:</label>' +
            '<input type="file" id="fileInput" name="fileInput" style="width: 100%; padding: 5px; border-radius: 3px; border: 1px solid #ccc;">' +
            '</div>' +
            '<input type="hidden" id="latitude" name="latitude" value="' + location.lat() + '">' +
            '<input type="hidden" id="longitude" name="longitude" value="' + location.lng() + '">' +
            '<button type="button" id="agregarBtn" onclick="submitForm()" style="background-color: #4c73ab; color: white; padding: 10px 20px; border: none; border-radius: 3px; cursor: pointer;">Agregar</button>' +
            '</form>';

        // Función para enviar el formulario
        function submitForm() {
            addPet();
        }

        var infowindow = new google.maps.InfoWindow({
            content: form
        });

        if (currentInfoWindow !== null) {
            currentInfoWindow.close();
        }

        infowindow.setPosition(location);
        infowindow.open(map);
        currentInfoWindow = infowindow;

        google.maps.event.addListener(infowindow, 'closeclick', function () {
            formularioAbierto = false;
        });

        hideLoadingAnimation();
    });
}

// Función para enviar el formulario
function submitForm() {
    showLoadingAnimation().then(function () {
        setTimeout(function () {
            addPet();
            formularioAbierto = false;
            currentInfoWindow.close();
            hideLoadingAnimation();
        }, 1000);
    });
}

// Función para mostrar la animación de carga
function showLoadingAnimation() {
    return new Promise(function (resolve, reject) {
        var loadingAnimation = document.createElement('div');
        loadingAnimation.innerHTML = 'Cargando...';
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
        loadingAnimation.classList.add('loading-animation');
        document.getElementById('map').appendChild(loadingAnimation);

        setTimeout(function () {
            resolve();
        }, 10);
    });
}

// Función para ocultar la animación de carga
function hideLoadingAnimation() {
    return new Promise(function (resolve, reject) {
        var loadingAnimation = document.querySelector('.loading-animation');
        if (loadingAnimation) {
            loadingAnimation.parentNode.removeChild(loadingAnimation);
        }

        setTimeout(function () {
            resolve();
        }, 10);
    });
}
