// Función para obtener la ubicación del usuario
function getLocalization(callback) {
    // Comprobar si el navegador ya tiene permisos para acceder a la ubicación
    navigator.permissions.query({ name: 'geolocation' }).then(function(permissionStatus) {
        if (permissionStatus.state === 'granted' || localStorage.getItem('locationPermission') === 'true') {
            // Si ya tiene permisos o se otorgaron previamente, obtener la ubicación
            navigator.geolocation.getCurrentPosition(function(position) {
                var location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log("Latitude: " + location.lat + ", Longitude: " + location.lng);
                callback(location);
            }, function(error) {
                console.error('Error al obtener la ubicación del usuario: ', error);
                callback({ lat: 0, lng: 0 });
            });
        } else {
            // Si no tiene permisos, solicitar permisos y guardar en localStorage si se otorgan
            navigator.geolocation.getCurrentPosition(function(position) {
                var location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                // Guardar en localStorage para indicar que se han otorgado permisos
                localStorage.setItem('locationPermission', 'true');
                console.log("Latitude: " + location.lat + ", Longitude: " + location.lng);
                callback(location);
            }, function(error) {
                console.error('Error al obtener la ubicación del usuario: ', error);
                callback({ lat: 0, lng: 0 });
            });
        }
    });
}
