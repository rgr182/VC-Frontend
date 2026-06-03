"use client";

import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/mapa", label: "Ver Mapa" },
  { href: "/store", label: "Pet Store" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Full reloads (plain <a>) keep the map page's scripts isolated */}
        <a
          href="/"
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight"
        >
          <span className="text-2xl" aria-hidden>
            🐾
          </span>
          <span>
            De Vuelta a{" "}
            <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
              Casa
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={
                  "rounded-full px-3 py-1.5 text-sm font-medium transition sm:px-4 " +
                  (active
                    ? "bg-gradient-to-r from-brand-500 to-pink-500 text-white shadow-sm"
                    : "text-stone-600 hover:bg-brand-50 hover:text-brand-600")
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
