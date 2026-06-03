import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

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

const INFO = [
  { icon: "🛍️", title: "Compras", text: "Los mejores productos para tu mejor amigo." },
  { icon: "💳", title: "Pago", text: "Realiza tu pago de forma segura." },
  { icon: "🚚", title: "Envío", text: "A la puerta de tu casa." },
];

export default function StorePage() {
  return (
    <>
      <SiteNav />

      {/* Hero + cart */}
      <section className="border-b border-stone-200 bg-gradient-to-br from-brand-50 to-stone-50 dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-14 sm:flex-row sm:justify-between sm:px-6">
          <div className="max-w-lg text-center sm:text-left">
            <span className="font-semibold text-brand-600 dark:text-brand-400">
              Pet Store
            </span>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
              Productos online para tu mascota.
            </h1>
            <p className="mt-4 text-stone-600 dark:text-stone-400">
              Te ofrecemos una gran variedad de productos de calidad para
              consentir a tu peludito.
            </p>

            {/* Cart (toggles on hover; wired by /Scripts/store.js) */}
            <div className="group relative mt-6 inline-block">
              <button
                id="img-carrito"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-brand-600"
              >
                🛒 Mi carrito
              </button>
              <div
                id="carrito"
                className="invisible absolute left-0 z-20 mt-2 w-80 origin-top-left rounded-xl border border-stone-200 bg-white p-4 text-left opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:border-stone-700 dark:bg-stone-800"
              >
                <table id="lista-carrito" className="w-full text-sm">
                  <thead className="text-stone-400">
                    <tr className="[&>th]:pb-2 [&>th]:text-left [&>th]:font-medium">
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="[&_img]:h-10 [&_img]:w-10 [&_img]:rounded [&_img]:object-cover [&_td]:py-1 [&_.borrar]:font-bold [&_.borrar]:text-red-500" />
                </table>
                <a
                  href="#"
                  id="vaciar-carrito"
                  className="mt-3 block rounded-lg bg-stone-100 py-2 text-center text-sm font-semibold text-stone-600 transition hover:bg-stone-200 dark:bg-stone-700 dark:text-stone-200 dark:hover:bg-stone-600"
                >
                  Vaciar Carrito
                </a>
              </div>
            </div>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Logo_volviendo_a_casa-removebg-preview.png"
            alt="De Vuelta a Casa"
            className="w-56 sm:w-72"
          />
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Info strip */}
        <section className="-mt-8 grid gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:grid-cols-3 dark:border-stone-800 dark:bg-stone-900">
          {INFO.map((i) => (
            <div key={i.title} className="text-center">
              <div className="text-3xl">{i.icon}</div>
              <h3 className="mt-2 font-bold">{i.title}</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {i.text}
              </p>
            </div>
          ))}
        </section>

        {/* Products */}
        <section className="py-12">
          <h2 className="mb-8 text-3xl font-extrabold">Productos destacados</h2>
          <div
            id="lista-1"
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
          >
            {PRODUCTS.map((img, i) => (
              <div
                key={i}
                className="product group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="aspect-square overflow-hidden bg-stone-100 dark:bg-stone-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/img/${img}`}
                    alt="Producto"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="product-txt flex flex-1 flex-col p-4">
                  <h3 className="font-semibold">Producto</h3>
                  <p className="precio mt-1 text-lg font-bold text-brand-600 dark:text-brand-400">
                    $15.00
                  </p>
                  <a
                    href="#"
                    data-id={i + 1}
                    className="agregar-carrito mt-3 block rounded-lg bg-brand-500 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-600"
                  >
                    Agregar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="pb-16">
          <div className="rounded-2xl bg-brand-500 px-6 py-10 text-center text-white">
            <h2 className="text-2xl font-bold">Mantente al día</h2>
            <p className="mt-2 text-brand-50">
              Recibe ofertas y novedades para tu mascota.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Correo"
                className="flex-1 rounded-full px-5 py-3 text-stone-800 outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-stone-800"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />

      <Script src="/Scripts/store.js" strategy="afterInteractive" />
    </>
  );
}
