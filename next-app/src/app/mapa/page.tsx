import Script from "next/script";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const MAPS_API_KEY = "AIzaSyAkx8ZPwcFziyPqjMNb247_Qm4ckd8KW7g";

export default function MapaPage() {
  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold sm:text-4xl">
            Mapa de Perritos Extraviados
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Haz clic derecho sobre el mapa para reportar una mascota en esa
            ubicación.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            id="searchInput"
            placeholder="Buscar por nombre o descripción..."
            className="flex-1 rounded-full border border-stone-300 bg-white px-5 py-2.5 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-stone-700 dark:bg-stone-800"
          />
          <div className="flex gap-2">
            <button
              type="button"
              id="lostBtn"
              className="rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Mascotas Perdidas
            </button>
            <button
              type="button"
              id="reportedBtn"
              className="rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Mascotas Reportadas
            </button>
          </div>
        </div>

        <div id="mapContainer" className="overflow-hidden rounded-2xl shadow-md">
          <div id="map" className="h-[70vh] w-full" />
        </div>
      </main>

      {/* Detail modal */}
      <div
        id="myModal"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 p-4"
      >
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-stone-800">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-lg font-bold">Detalle de la mascota</h5>
            <button
              type="button"
              data-close
              aria-label="Cerrar"
              className="grid h-8 w-8 place-items-center rounded-full text-2xl leading-none text-stone-400 transition hover:bg-stone-100 dark:hover:bg-stone-700"
            >
              &times;
            </button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="modalImage"
            src="/images/imagen.jpg"
            alt="Imagen del Perrito"
            className="mb-4 h-56 w-full rounded-xl object-cover"
          />
          <p id="modalName" className="text-lg font-semibold">
            Nombre de la Mascota
          </p>
          <p id="modalDescription" className="mt-1 text-stone-600 dark:text-stone-400">
            Descripción de la Mascota
          </p>
        </div>
      </div>

      {/* Choice modal */}
      <div
        id="ChoiseModal"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 p-4"
      >
        <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-stone-800">
          <h5 className="text-2xl font-bold">Selecciona una opción</h5>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            ¿Qué deseas hacer?
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              id="searchBtn"
              className="flex-1 rounded-xl bg-brand-500 px-6 py-4 font-semibold text-white transition hover:bg-brand-600"
            >
              🔎 Estoy buscando a mi mascota
            </button>
            <button
              type="button"
              id="reportBtn"
              className="flex-1 rounded-xl border border-stone-300 px-6 py-4 font-semibold transition hover:bg-stone-100 dark:border-stone-600 dark:hover:bg-stone-700"
            >
              📢 Quiero reportar un lomito extraviado
            </button>
          </div>
        </div>
      </div>

      <SiteFooter />

      {/* jQuery (required by the map scripts) — must be ready before them */}
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="beforeInteractive"
      />

      {/* Minimal Bootstrap-style .modal() shim so the existing scripts work */}
      <Script id="modal-shim" strategy="afterInteractive">
        {`
          (function () {
            if (!window.jQuery) return;
            jQuery.fn.modal = function (action) {
              return this.each(function () {
                if (action === 'hide') {
                  this.classList.add('hidden');
                  this.classList.remove('flex');
                } else {
                  this.classList.remove('hidden');
                  this.classList.add('flex');
                }
              });
            };
            jQuery(function ($) {
              // Close the detail modal via the × button or backdrop click
              $('#myModal').on('click', function (e) {
                if (e.target === this || $(e.target).closest('[data-close]').length) {
                  $('#myModal').modal('hide');
                }
              });
            });
          })();
        `}
      </Script>

      {/* App scripts (load in order) */}
      <Script src="/Scripts/geolocation.js" strategy="afterInteractive" />
      <Script src="/Scripts/initMap.js" strategy="afterInteractive" />
      <Script src="/Scripts/form.js" strategy="afterInteractive" />
      <Script src="/Scripts/markers.js" strategy="afterInteractive" />
      <Script src="/Scripts/main.js" strategy="afterInteractive" />

      {/* Choice modal on load */}
      <Script id="map-modal-init" strategy="afterInteractive">
        {`
          jQuery(function ($) {
            $('#ChoiseModal').modal('show');
            $('#searchBtn').click(function () {
              localStorage.setItem('userChoice', 'buscando');
              $('#ChoiseModal').modal('hide');
            });
            $('#reportBtn').click(function () {
              localStorage.setItem('userChoice', 'reportar');
              $('#ChoiseModal').modal('hide');
            });
          });
        `}
      </Script>

      {/* Google Maps — loaded last; calls global initMap when ready */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap`}
        strategy="afterInteractive"
      />
    </>
  );
}
