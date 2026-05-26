import '../styles/globals.css';

// Metadatos de la página (SEO y compartir en redes)
export const metadata = {
  title: 'BERRACO 57 SPORT · Camiseta Colombia 2024',
  description:
    'Marca colombiana de ropa deportiva. Camiseta de la Selección Colombia — envío gratis y pago contra entrega. Stock limitado.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FBC01D',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Precarga de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Fuentes: Archivo Black, Oswald (varios pesos) y Bebas Neue */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Oswald:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
