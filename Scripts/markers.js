// Variable global para controlar el estado del formulario
var formularioAbierto = false;
var currentInfoWindow = null; // Variable global para controlar la ventana de información actual
var map; // Variable global para el mapa
var markers = []; // Array global para almacenar los marcadores


function addPet() {
    var petData = new FormData(); // Use FormData for image upload
  
    petData.append("name", $('#name').val());
    petData.append("description", $('#description').val());
    petData.append("color", $('#color').val());
    petData.append("gender", $('#gender').val());
    petData.append("address", $('#address').val());
    var latitude = parseFloat($('#latitude').val());
    var longitude = parseFloat($('#longitude').val());
    petData.append("latitude", latitude);
    petData.append("longitude", longitude);
    console.log("Latitude:", latitude, "Longitude:", longitude); // Log for debugging
    petData.append("createDate", new Date().toISOString());
    petData.append("status", localStorage.getItem('userChoice') === 'buscando' ? true : false);
  
    var fileInput = $('#fileInput')[0].files[0];
    if (fileInput) {
      petData.append("file", fileInput); // Add image file to FormData
    }
  
    $.ajax({
      url: 'https://localhost:7200/Pets',
      method: 'POST',
      processData: false, // Don't process FormData automatically
      contentType: false,  // Set content type manually (not needed for FormData)
      data: petData,
      success: function (response) {
        console.log('Mascota agregada exitosamente');
        var marker = new google.maps.Marker({
          position: { lat: petData.get('latitude'), lng: petData.get('longitude') }, // Use get() for FormData values
          map: map,
          title: petData.get('name'),
          description: petData.get('description'),
        });
        marker.addListener('click', function () {
          $('#modalImage').attr('src', response.imageURL); // Assuming response contains image URL
          $('#modalName').text(petData.get('name'));
          $('#modalDescription').text(petData.get('description'));
          $('#myModal').modal('show');
        });
        markers.push(marker);
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
