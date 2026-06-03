"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar tema"
      className="grid h-9 w-9 place-items-center rounded-full border border-stone-200 bg-white text-stone-600 transition hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
    >
      <span className="text-base leading-none">{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
