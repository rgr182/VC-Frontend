"use client";

import { usePathname } from "next/navigation";

export default function HeroBanner({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

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
              href="/"
              className={`rounded-full px-6 py-3 font-semibold shadow-lg transition ${
                isHome
                  ? "bg-violet-600 text-white hover:bg-violet-700"
                  : "border border-white/50 text-white hover:bg-white/20"
              }`}
            >
              Inicio
            </a>
            <a
              href="/store"
              className={`rounded-full px-6 py-3 font-semibold shadow-lg transition ${
                !isHome
                  ? "bg-violet-600 text-white hover:bg-violet-700"
                  : "border border-white/50 text-white hover:bg-white/20"
              }`}
            >
              Tienda
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
