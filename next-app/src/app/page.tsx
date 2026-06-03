import Script from "next/script";

export default function LandingPage() {
  return (
    <>
      {/* Stylesheets (hoisted to <head> by React) */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="stylesheet" href="/Styles/landing.css" />

      <nav className="navbar navbar-expand-sm justify-content-between">
        <a className="navbar-brand" href="#">
          LOGO <i className="fa-solid fa-paw"></i>
        </a>
        <div className="navbar-nav justify-content-end">
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
      </nav>

      <header className="jumbotron img-fluid vh-100 d-flex align-items-center">
        <div className="image-start text-end">
          <h1 className="pb-4">Volviendo a Casa</h1>
          <p className="pb-4">
            ¿Perdiste a tu mascota? Estamos aquí para ayudar. Con nuestra
            aplicación intuitiva y un equipo comprometido, te proporcionaremos
            las herramientas y el apoyo que necesitas para reunirte con tu
            compañero peludo lo antes posible.
          </p>
          <a href="/" className="btn btn-primary btn-lg btn-header">
            Sobre Nosotros
          </a>
        </div>
      </header>

      <main>
        <div className="container text-center py-5">
          <div className="row">
            <section className="col">
              <h2 className="py-3">
                Pet Store <i className="fa-solid fa-cart-shopping"></i>
              </h2>
              <p>
                Eche un vistazo a nuestra selección de artículos y accesorios
                para mascotas. Una parte de los ingresos se destina a apoyar
                nuestros esfuerzos de rescate de mascotas perdidas.
              </p>
              <a href="/store" className="btn btn-primary">
                Compre Ahora
              </a>
            </section>
            <section className="col">
              <h2 className="py-3">
                Mapa de Mascotas <i className="fa-solid fa-dog"></i>
              </h2>
              <p>
                Informe y busque mascotas perdidas o encontradas en su zona
                utilizando nuestro mapa interactivo.
              </p>
              <a href="/mapa" className="btn btn-accent">
                Ver Mapa
              </a>
            </section>
          </div>
        </div>

        <section id="faq" className="container py-5">
          <h2 className="py-3">
            Preguntas Frecuentes{" "}
            <i className="fa-regular fa-circle-question"></i>
          </h2>
          <div className="accordion" id="FAQaccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿Cómo reporto a una mascota perdida?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#FAQaccordion"
              >
                <div className="accordion-body">
                  Para reportar la pérdida de una mascota, sólo tiene que acceder
                  al Mapa de mascotas extraviadas y hacer clic en el área donde lo
                  vio por ultima vez, posteriormente se le pedirá que proporcione
                  detalles sobre su mascota, incluida una descripción y una imagen
                  de referencia.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Esto es una pregunta frecuente
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#FAQaccordion"
              >
                <div className="accordion-body">
                  Esto es una respuesta a una pregunta frecuente.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Esto es una pregunta frecuente #2
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#FAQaccordion"
              >
                <div className="accordion-body">
                  Esto es una respuesta a una pregunta frecuente #2.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="container py-5">
          <h2 className="py-3">Historias de Éxito</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-img-top-wrapper">
                  <img
                    src="/images/success-1.jpg"
                    className="card-img-top"
                    alt="Happy Pet"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Esta es una historia de éxito te lo juro #1
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-img-top-wrapper">
                  <img
                    src="/images/success-2.jpg"
                    className="card-img-top"
                    alt="Happy Pet"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Esta es una historia de éxito te lo juro #2
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-img-top-wrapper">
                  <img
                    src="/images/success-3.jpg"
                    className="card-img-top"
                    alt="Happy Pet"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Esta es una historia de éxito te lo juro #3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>¡Siguenos!</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-right">
              <button id="darkModeToggle" className="btn btn-light">
                <i className="fa-solid fa-moon"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script src="/Scripts/landingP.js" strategy="afterInteractive" />
    </>
  );
}
