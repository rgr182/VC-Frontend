"use client";

import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/mapa", label: "Ver Mapa" },
  { href: "/store", label: "Pet Store" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/80 backdrop-blur dark:border-stone-800 dark:bg-stone-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Full reloads (plain <a>) keep the map page's scripts isolated */}
        <a href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="text-2xl" aria-hidden>
            🐾
          </span>
          <span>
            De Vuelta a <span className="text-brand-500">Casa</span>
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
                    ? "bg-brand-500 text-white shadow-sm"
                    : "text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800")
                }
              >
                {link.label}
              </a>
            );
          })}
          <div className="ml-1 sm:ml-2">
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
