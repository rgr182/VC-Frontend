export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-xl" aria-hidden>
            🐾
          </span>
          De Vuelta a Casa
        </div>

        <nav className="flex items-center gap-5 text-stone-500 dark:text-stone-400">
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            className="transition hover:text-brand-500"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            aria-label="Twitter"
            className="transition hover:text-brand-500"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            className="transition hover:text-brand-500"
          >
            Instagram
          </a>
        </nav>

        <p className="text-sm text-stone-400">
          Derechos Reservados VC 2024
        </p>
      </div>
    </footer>
  );
}
