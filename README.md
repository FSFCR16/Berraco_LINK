# BERRACO 57 SPORT — Página de enlaces

Landing tipo "Linktree" de una sola pantalla para la marca, construida con
**Next.js 14 (App Router)** en vanilla JS/CSS (sin frameworks de UI externos).

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm start        # servir el build
```

## Desplegar (Vercel / Netlify)

Sube el repositorio a GitHub y conéctalo a Vercel o Netlify. Detectan Next.js
automáticamente; no necesitas configurar nada más.

## Dónde cambiar los enlaces

Todos los `href` están marcados con un comentario `// ENLACE:` para que los
encuentres rápido:

| Enlace             | Archivo                                  |
|--------------------|------------------------------------------|
| Camiseta Colombia  | `components/CtaPrincipal.js`             |
| Tienda / WhatsApp / Instagram / TikTok | `components/BotonesSecundarios.js` |

Recuerda reemplazar `57XXXXXXXXXX` por tu número real de WhatsApp.

## El countdown

El contador de días al Mundial está en `hooks/useCountdown.js` y apunta al
**18 de junio de 2026**. Cambia esa fecha ahí si lo necesitas. Si el JS no
cargara, el badge muestra "23 días" como respaldo.

## Estructura

```
app/
  layout.js              → HTML raíz + Google Fonts + metadatos
  page.js                → ensambla todos los componentes
components/
  BarraCine.js           → barras negras superior/inferior (cinemascope)
  Decoraciones.js        → esquinas HUD + partículas flotantes
  Logo.js                → logo BERRACO 57
  CtaPrincipal.js        → botón camiseta + countdown
  BotonesSecundarios.js  → lista de enlaces secundarios
hooks/
  useCountdown.js        → cuenta regresiva al Mundial
styles/
  globals.css            → identidad visual completa (colores, animaciones)
```

## Identidad visual

Paleta amarillo (`#FBC01D`) + negro (`#0A0A0A`), tipografías Archivo Black +
Oswald + Bebas Neue, estética HUD/cinemascope (esquinas, barras, grano y
diagonales). Diseñada mobile-first y respeta `prefers-reduced-motion`.
