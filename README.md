# 🐾 De Vuelta a Casa

> Reúnete con tu compañero peludo lo antes posible.

**De Vuelta a Casa** (VC) es una aplicación web pensada para ayudar a las personas
a reportar, buscar y reencontrar mascotas extraviadas en su zona. Nace de una idea
simple: cuando una mascota se pierde, cada minuto y cada vecino cuenta — así que la
herramienta debe ser **gratuita, inmediata y comunitaria**.

## Principios

La aplicación se construye sobre cuatro ideas que guían cada pantalla y cada decisión:

- **Gratuita para quien la necesita.** Reportar y buscar mascotas no cuesta nada.
  El proyecto se sostiene en parte con los ingresos de la *Pet Store*, no cobrando
  a quien está buscando a su compañero.
- **Comunitaria.** Un mapa interactivo en tiempo real convierte a cada vecino en
  parte de la red de búsqueda. Una mascota encontrada por una persona puede ser
  reconocida por otra.
- **Inmediata y sencilla.** Reportar es un clic en el mapa sobre el lugar donde se
  vio a la mascota por última vez; buscar es filtrar por nombre o descripción.
- **Cercana.** Tono cálido, en español, con una identidad visual amable (paleta
  naranja "hogar", tipografía Poppins) para acompañar un momento que suele ser
  estresante.

## Funcionalidades

| Sección | Descripción |
| --- | --- |
| **Inicio** (`/`) | Página de bienvenida con la propuesta, historias de éxito y preguntas frecuentes. |
| **Mapa de Mascotas** (`/mapa`) | Mapa interactivo de Google Maps para **reportar** una mascota (clic derecho sobre la ubicación) o **buscar** por nombre/descripción, con geolocalización y modales de detalle. |
| **Pet Store** (`/store`) | Tienda de productos y accesorios para mascotas con carrito; parte de los ingresos sostiene el proyecto. |

## Tecnologías

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) con paleta de marca personalizada
- Fuente [Poppins](https://fonts.google.com/specimen/Poppins) vía `next/font`
- Google Maps JavaScript API (mapa, marcadores y geolocalización)

> El mapa y la tienda reutilizan scripts heredados en JavaScript (`public/Scripts/`)
> integrados mediante `next/script`, por lo que esas páginas usan navegación con
> recarga completa (`<a>`) para mantener sus scripts aislados.

## Empezar

El código de la aplicación vive en [`next-app/`](./next-app).

```bash
cd next-app
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts disponibles

```bash
npm run dev     # servidor de desarrollo
npm run build   # compilación de producción
npm run start   # servir la compilación de producción
npm run lint    # linter (ESLint)
```

## Estructura

```
next-app/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Inicio (landing)
│   │   ├── mapa/page.tsx   # Mapa de mascotas extraviadas
│   │   ├── store/page.tsx  # Pet Store
│   │   ├── layout.tsx      # Layout raíz (metadatos, fuente)
│   │   └── globals.css     # Estilos globales y paleta de marca
│   └── components/
│       ├── SiteNav.tsx     # Navegación
│       └── SiteFooter.tsx  # Pie de página
└── public/
    ├── images/ · img/      # Imágenes y productos
    └── Scripts/            # Scripts del mapa y la tienda
```

## Configuración

La página del mapa requiere una clave de **Google Maps JavaScript API**. Actualmente
se define en `src/app/mapa/page.tsx`; antes de desplegar a producción conviene
moverla a una variable de entorno y restringir la clave por dominio.

---

Hecho con cariño para ayudar a que cada lomito vuelva a casa. 🐶🏡
