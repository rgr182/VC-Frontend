import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const FAQS = [
  {
    q: "¿Cómo reporto a una mascota perdida?",
    a: "Para reportar la pérdida de una mascota, sólo tiene que acceder al Mapa de mascotas extraviadas y hacer clic en el área donde lo vio por última vez. Posteriormente se le pedirá que proporcione detalles sobre su mascota, incluida una descripción y una imagen de referencia.",
  },
  {
    q: "¿La aplicación tiene algún costo?",
    a: "No, reportar y buscar mascotas es completamente gratuito. Una parte de los ingresos de la Pet Store ayuda a sostener el proyecto.",
  },
  {
    q: "¿Cómo sé si encontraron a mi mascota?",
    a: "Las mascotas reportadas aparecen en el mapa interactivo. Revisa la zona donde la perdiste y filtra por nombre o descripción para encontrar coincidencias.",
  },
];

const STORIES = [
  {
    img: "/images/success-1.jpg",
    text: "Bobby volvió a casa tras 3 días perdido.",
    color: "from-brand-400 to-pink-400",
  },
  {
    img: "/images/success-2.jpg",
    text: "Luna fue encontrada gracias a un vecino.",
    color: "from-teal-400 to-sky-400",
  },
  {
    img: "/images/success-3.jpg",
    text: "Rocky se reunió con su familia en una semana.",
    color: "from-violet-400 to-fuchsia-400",
  },
];

export default function LandingPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-700/85 via-pink-600/55 to-violet-600/30" />
        <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-4 py-20 sm:px-6">
          <div className="max-w-xl text-white">
            <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-semibold backdrop-blur">
              🐾 Reúnete con tu compañero
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight drop-shadow-sm sm:text-6xl">
              Volviendo a Casa
            </h1>
            <p className="mt-5 text-lg text-white/90">
              ¿Perdiste a tu mascota? Estamos aquí para ayudar. Con nuestra
              aplicación intuitiva y un equipo comprometido, te proporcionamos
              las herramientas y el apoyo que necesitas para reunirte con tu
              compañero peludo lo antes posible.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/mapa"
                className="rounded-full bg-white px-6 py-3 font-semibold text-brand-600 shadow-lg transition hover:bg-brand-50"
              >
                Ver Mapa
              </a>
              <a
                href="#faq"
                className="rounded-full border border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Sobre Nosotros
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Feature cards */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-t-4 border-brand-500 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-3xl">
              🛒
            </div>
            <h2 className="mt-4 text-xl font-bold">Pet Store</h2>
            <p className="mt-2 text-stone-600">
              Eche un vistazo a nuestra selección de artículos y accesorios para
              mascotas. Una parte de los ingresos se destina a apoyar nuestros
              esfuerzos de rescate.
            </p>
            <a
              href="/store"
              className="mt-5 inline-block font-semibold text-brand-600 hover:text-brand-700"
            >
              Compre Ahora →
            </a>
          </div>
          <div className="rounded-2xl border-t-4 border-teal-500 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-3xl">
              🐕
            </div>
            <h2 className="mt-4 text-xl font-bold">Mapa de Mascotas</h2>
            <p className="mt-2 text-stone-600">
              Informe y busque mascotas perdidas o encontradas en su zona
              utilizando nuestro mapa interactivo en tiempo real.
            </p>
            <a
              href="/mapa"
              className="mt-5 inline-block font-semibold text-teal-600 hover:text-teal-700"
            >
              Ver Mapa →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16">
          <h2 className="text-center text-3xl font-extrabold">
            Preguntas{" "}
            <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQS.map((item, i) => (
              <details
                key={i}
                open={i === 0}
                className="group rounded-xl border border-stone-200 bg-white p-5 shadow-sm open:border-brand-200 open:ring-1 open:ring-brand-100"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {item.q}
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-stone-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Success stories — colorful band */}
      <section className="bg-gradient-to-br from-brand-50 via-pink-50 to-violet-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold">
            Historias de Éxito
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {STORIES.map((s, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`h-2 bg-gradient-to-r ${s.color}`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt="Mascota feliz"
                  className="h-48 w-full object-cover"
                />
                <p className="p-5 text-stone-600">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
