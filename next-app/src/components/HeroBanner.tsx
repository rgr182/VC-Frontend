export default function HeroBanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-stone-800">
      <div className="mx-auto flex min-h-[50vh] max-w-6xl items-center px-4 py-20 sm:px-6">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-stone-300">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/store"
              className="rounded-full bg-white px-6 py-3 font-semibold text-stone-800 shadow-lg transition hover:bg-stone-200"
            >
              Tienda
            </a>
            <a
              href="/"
              className="rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Inicio
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
