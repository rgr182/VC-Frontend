// Archivo: geolocation.js

// Función para obtener la ubicación del usuario
function getLocalization(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log("Latitude: " + latitude + ", Longitude: " + longitude);
            callback({ lat: latitude, lng: longitude });
        }, function (error) {
            console.error('Error al obtener la ubicación del usuario: ', error);
            callback({ lat: 0, lng: 0 });
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        callback({ lat: 0, lng: 0 });
    }
}
