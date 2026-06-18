import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HeroBanner from "@/components/HeroBanner";

const PRODUCTS = Array.from({ length: 8 }, (_, i) => `producto-${i + 1}`);

const INFO = [
  {
    icon: "○",
    title: "Ítem 1",
    text: "Descripción del ítem 1.",
    bg: "bg-stone-100",
  },
  {
    icon: "○",
    title: "Ítem 2",
    text: "Descripción del ítem 2.",
    bg: "bg-stone-100",
  },
  {
    icon: "○",
    title: "Ítem 3",
    text: "Descripción del ítem 3.",
    bg: "bg-stone-100",
  },
];

export default function StorePage() {
  return (
    <>
      <SiteNav />

      <HeroBanner title="Tienda" description="Descripción de la tienda." />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Info strip */}
        <section className="mt-8 grid gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-md sm:grid-cols-3">
          {INFO.map((i) => (
            <div key={i.title} className="flex flex-col items-center text-center">
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl ${i.bg} text-3xl`}
              >
                {i.icon}
              </div>
              <h3 className="mt-3 font-bold">{i.title}</h3>
              <p className="text-sm text-stone-500">{i.text}</p>
            </div>
          ))}
        </section>

        {/* Products */}
        <section className="py-12">
          <h2 className="mb-8 text-3xl font-extrabold text-stone-800">
            Productos
          </h2>
          <div
            id="lista-1"
            className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
          >
            {PRODUCTS.map((name, i) => (
              <div
                key={i}
                className="product group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden bg-stone-200 flex items-center justify-center text-stone-400 text-4xl">
                  ○
                </div>
                <div className="product-txt flex flex-1 flex-col p-4">
                  <h3 className="font-semibold">{name}</h3>
                  <p className="precio mt-1 text-lg font-bold text-stone-700">
                    $0.00
                  </p>
                  <a
                    href="#"
                    data-id={i + 1}
                    className="agregar-carrito mt-3 block rounded-lg bg-stone-700 py-2 text-center text-sm font-semibold text-white transition hover:bg-stone-800"
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
          <div className="rounded-2xl bg-stone-800 px-6 py-10 text-center text-white shadow-lg">
            <h2 className="text-2xl font-bold">Suscríbete</h2>
            <p className="mt-2 text-stone-300">
              Recibe novedades.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Correo"
                className="flex-1 rounded-full px-5 py-3 text-stone-800 outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-stone-700"
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
