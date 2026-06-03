import Script from "next/script";

const MAPS_API_KEY = "AIzaSyAkx8ZPwcFziyPqjMNb247_Qm4ckd8KW7g";

export default function MapaPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="/Styles/Style.css" />
      <link rel="stylesheet" href="/Styles/Modal.css" />
      <link rel="stylesheet" href="/Styles/store.css" />

      <header className="custom-header">
        <div>
          <h1>De Vuelta a Casa</h1>
          <p>Una aplicación para ayudar a encontrar a lomitos extraviados</p>
        </div>
        <div>
          <a className="nav-link" href="/">
            Inicio
          </a>
          <a className="nav-link" href="/store">
            Pet Store
          </a>
          <a className="nav-link" href="/mapa">
            Ver Mapa
          </a>
        </div>
      </header>

      {/* Modal 1 */}
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Detalle del la mascota
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img id="modalImage" src="/images/imagen.jpg" alt="Imagen del Perrito" />
              <p id="modalName">Nombre de la Mascota</p>
              <p id="modalDescription">Descripción de la Mascota</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2 */}
      <div
        className="modal fade"
        id="ChoiseModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Selecciona una opción
              </h5>
            </div>
            <div className="modal-body">
              <p>¿Qué deseas hacer?</p>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" id="searchBtn">
                  Estoy buscando..
                </button>
                <ul className="list_show" id="menu">
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Nombre
                    </a>
                    <input type="text" id="Nombre" name="Nombre" />
                    <br />
                  </li>
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Descripción
                    </a>
                    <input type="text" id="Descripción" name="Descripción" />
                    <br />
                  </li>
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Color
                    </a>
                    <input type="text" id="Color" name="Color" />
                    <br />
                  </li>
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Género
                    </a>
                    <input type="text" id="Género" name="Género" />
                    <br />
                  </li>
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Domicilio
                    </a>
                    <input type="text" id="Domicilio" name="Domicilio" />
                    <br />
                  </li>
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Latitud
                    </a>
                    <input type="text" id="Latitud" name="Latitud" />
                    <br />
                  </li>
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Longitud
                    </a>
                    <input type="text" id="Longitud" name="Longitud" />
                    <br />
                  </li>
                  <li className="list_inside">
                    <a href="#" className="nav_link nav_link--inside">
                      Imagen
                    </a>
                    <input type="text" id="Imagen" name="Imagen" />
                    <br />
                  </li>
                </ul>
                <button type="button" className="btn btn-secondary" id="reportBtn">
                  Quiero reportar un lomito extraviado
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="searchContainer">
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar por nombre o descripción..."
          />
        </div>
        <div className="btn-group" role="group" aria-label="Filtrar mascotas">
          <button type="button" className="btn btn-info" id="lostBtn">
            Mascotas Perdidas
          </button>
          <button type="button" className="btn btn-warning" id="reportedBtn">
            Mascotas Reportadas
          </button>
        </div>
        <h2>Mapa de Perritos Extraviados</h2>
        <div id="mapContainer">
          <div id="map"></div>
        </div>
      </div>

      <footer>
        <h2>Derechos Reservados VC 2024</h2>
      </footer>

      {/* Libraries — loaded in order */}
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        strategy="afterInteractive"
      />

      {/* App scripts */}
      <Script src="/Scripts/geolocation.js" strategy="afterInteractive" />
      <Script src="/Scripts/initMap.js" strategy="afterInteractive" />
      <Script src="/Scripts/form.js" strategy="afterInteractive" />
      <Script src="/Scripts/markers.js" strategy="afterInteractive" />
      <Script src="/Scripts/main.js" strategy="afterInteractive" />

      {/* Page-specific modal logic (was inline in index.html) */}
      <Script id="map-modal-init" strategy="afterInteractive">
        {`
          $(document).ready(function () {
            $('#ChoiseModal').modal('show');
            $('#searchBtn').click(function () {
              localStorage.setItem('userChoice', 'buscando');
              $('#ChoiseModal').modal('hide');
            });
            $('#reportBtn').click(function () {
              localStorage.setItem('userChoice', 'reportar');
              $('#ChoiseModal').modal('hide');
            });
          });
        `}
      </Script>

      {/* Google Maps — loaded last; calls global initMap when ready */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap`}
        strategy="afterInteractive"
      />
    </>
  );
}
