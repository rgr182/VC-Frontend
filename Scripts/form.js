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
        // Simular una demora de 1 segundo para la animación de carga
        setTimeout(function () {
            addPet(); // Llama a la función que agrega la mascota
            formularioAbierto = false; // Establecer el estado del formulario como cerrado
            currentInfoWindow.close(); // Cierra el InfoWindow después de enviar el formulario

            // Ocultar animación de carga después de enviar el formulario
            hideLoadingAnimation();
        }, 1000); // 1 segundo de demora simulada para la animación de carga
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