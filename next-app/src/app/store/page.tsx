import Script from "next/script";

const PRODUCTS = [
  "ACCESORIOSPERRO2.png",
  "ACCESORIOSPERRO3.png",
  "ACCESORIOSPERRO4.png",
  "ACCESORIOSPERRO5.png",
  "ACCESORIOSPERROS6.png",
  "arnesgato1.png",
  "arnesgato2.png",
  "arnesperro1.png",
  "casagato1.png",
  "casagato2.png",
  "casaperro1.png",
  "casaperro2.png",
  "collardecastigoperro.png",
  "collarperro1.png",
  "collarperro2.jpg",
  "CUIDADOPERSONALPERRO1.png",
  "CUIDADOPERSONALPERRO2.png",
  "CUIDADOPERSONALPERRO3.png",
  "disfrazgato1.jpg",
  "disfrazperro1.png",
  "JUGUETES1.png",
  "JUGUETES2.png",
  "MEDICAMENTOS1.png",
  "MEDICAMENTOS2.png",
  "MEDICAMENTOS3.png",
  "MEDICAMENTOS4.png",
  "recuperaciongato1.png",
  "recuperacionperro1.png",
  "ropaperrito1.png",
  "ropaperrito2.png",
];

const OFFERS = [
  "accesorios1.png",
  "arnesgato1.png",
  "arnesgato2.png",
  "ACCESORIOSPERRO1.png",
];

export default function StorePage() {
  return (
    <>
      <link rel="stylesheet" href="/Styles/store.css" />

      <header className="header">
        <div className="menu container">
          <a href="#" className="logo">
            logo
          </a>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src="/img/menu.png" className="menu-icono" alt="menu" />
          </label>
          <nav className="navbar">
            <ul>
              <li>
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/mapa" className="active-menu">
                  Encuentra tu mascota
                </a>
              </li>
              <li>
                <a href="/store" className="enlace">
                  Pet Store
                </a>
              </li>
              <li>
                <a href="#">Donaciones</a>
              </li>
            </ul>
          </nav>
          <div>
            <ul>
              <li className="submenu">
                <img src="/img/car.svg" id="img-carrito" alt="carrito" />
                <div id="carrito">
                  <table id="lista-carrito">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                  <a href="#" id="vaciar-carrito" className="btn-2">
                    Vaciar Carrito
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-content container">
          <div className="header-txt">
            <span>Pet Store</span>
            <h1>Productos online para tu mascota.</h1>
            <h5>
              Te ofrecemos una gran variedad de productos de calidad para
              consentir a tu peludito.
            </h5>
          </div>
          <div className="header-img">
            <img src="/img/Logo_volviendo_a_casa-removebg-preview.png" alt="" />
          </div>
        </div>
      </header>

      <section className="information container">
        <div className="information-content">
          <div className="information-1">
            <img src="/img/i1.svg" alt="" />
            <h3>Compras</h3>
            <p>
              Los mejores productos
              <br />
              tu mejor amigo.
            </p>
          </div>
          <div className="information-1">
            <img src="/img/i2.svg" alt="" />
            <h3>Pago</h3>
            <p>Realiza tu pago de forma segura.</p>
          </div>
          <div className="information-1">
            <img src="/img/i3.svg" alt="" />
            <h3>Envio</h3>
            <p>A la puerta de tu casa.</p>
          </div>
        </div>
      </section>

      <section className="oferts container">
        {OFFERS.map((img, i) => (
          <div className="ofert-1" key={i}>
            <img src={`/img/${img}`} alt="" />
            <h3>Oferta</h3>
            <p>Premium</p>
          </div>
        ))}
      </section>

      <main className="products container" id="lista-1">
        <h2>Productos destacados</h2>

        <div className="product-content">
          {PRODUCTS.map((img, i) => (
            <div className="product" key={i}>
              <img src={`/img/${img}`} alt="" />
              <div className="product-txt">
                <h3>Producto</h3>
                <p className="precio">$15.00</p>
                <a
                  href="#"
                  className="agregar-carrito btn-2"
                  data-id={i + 1}
                >
                  Agregar
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="service">
        <div className="service-1">
          <img className="store" src="/img/perroconropita1.jpeg" alt="" />
        </div>
        <div className="service-2">
          <img className="store" src="/img/gatoyperro1.jpeg" alt="" />
        </div>
        <div className="service-3">
          <img className="store" src="/img/Gatoconropita1.jpeg" alt="" />
        </div>
      </section>

      <section className="contact container">
        <form>
          <input type="email" placeholder="Correo" />
          <input type="submit" className="btn-3" />
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content container">
          {[0, 1, 2, 3, 4].map((col) => (
            <div className="link" key={col}>
              <h3>lorem</h3>
              <ul>
                <li>
                  <a href="#">lorem</a>
                </li>
                <li>
                  <a href="#">lorem</a>
                </li>
                <li>
                  <a href="#">lorem</a>
                </li>
                <li>
                  <a href="#">lorem</a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <Script src="/Scripts/store.js" strategy="afterInteractive" />
      <Script src="/Scripts/script.js" strategy="afterInteractive" />
    </>
  );
}
