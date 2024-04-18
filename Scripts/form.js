// Archivo: form.js

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
        '<button type="button" id="agregarBtn" onclick="submitForm()">Agregar</button>' +
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
