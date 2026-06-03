export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-gradient-to-br from-stone-900 to-brand-900 text-stone-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 font-semibold text-white">
          <span className="text-xl" aria-hidden>
            🐾
          </span>
          De Vuelta a Casa
        </div>

        <nav className="flex items-center gap-5">
          <a
            href="https://www.facebook.com/"
            className="transition hover:text-sky-400"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            className="transition hover:text-cyan-400"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            className="transition hover:text-pink-400"
          >
            Instagram
          </a>
        </nav>

        <p className="text-sm text-stone-400">Derechos Reservados VC 2024</p>
      </div>
    </footer>
  );
}
