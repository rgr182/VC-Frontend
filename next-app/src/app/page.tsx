import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const FAQS = [
  {
    q: "Pregunta frecuente 1",
    a: "Respuesta a la pregunta frecuente 1.",
  },
  {
    q: "Pregunta frecuente 2",
    a: "Respuesta a la pregunta frecuente 2.",
  },
  {
    q: "Pregunta frecuente 3",
    a: "Respuesta a la pregunta frecuente 3.",
  },
];

const STORIES = [
  {
    text: "Historia de ejemplo 1.",
  },
  {
    text: "Historia de ejemplo 2.",
  },
  {
    text: "Historia de ejemplo 3.",
  },
];

export default function LandingPage() {
  return (
    <>
      <SiteNav />

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-stone-800">
        <div className="mx-auto flex min-h-[50vh] max-w-6xl items-center px-4 py-20 sm:px-6">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              Clean Boilerplate
            </h1>
            <p className="mt-5 text-lg text-stone-300">
              Descripción del proyecto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/mapa"
                className="rounded-full bg-white px-6 py-3 font-semibold text-stone-800 shadow-lg transition hover:bg-stone-200"
              >
                Opción 2
              </a>
              <a
                href="/store"
                className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Opción 3
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Feature cards */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-t-4 border-stone-500 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-stone-200 text-3xl">
              ○
            </div>
            <h2 className="mt-4 text-xl font-bold">Sección 1</h2>
            <p className="mt-2 text-stone-600">
              Descripción de la sección 1.
            </p>
            <a
              href="/store"
              className="mt-5 inline-block font-semibold text-stone-700 hover:text-stone-900"
            >
              Ir →
            </a>
          </div>
          <div className="rounded-2xl border-t-4 border-stone-500 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-stone-200 text-3xl">
              ○
            </div>
            <h2 className="mt-4 text-xl font-bold">Sección 2</h2>
            <p className="mt-2 text-stone-600">
              Descripción de la sección 2.
            </p>
            <a
              href="/mapa"
              className="mt-5 inline-block font-semibold text-stone-700 hover:text-stone-900"
            >
              Ir →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16">
          <h2 className="text-center text-3xl font-extrabold text-stone-800">
            Preguntas Frecuentes
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {FAQS.map((item, i) => (
              <details
                key={i}
                open={i === 0}
                className="group rounded-xl border border-stone-200 bg-white p-5 shadow-sm open:border-stone-400 open:ring-1 open:ring-stone-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                  {item.q}
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-stone-200 text-stone-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-stone-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Stories */}
      <section className="bg-stone-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold text-stone-800">
            Ejemplos
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {STORIES.map((s, i) => (
              <article
                key={i}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-2 bg-stone-400" />
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
