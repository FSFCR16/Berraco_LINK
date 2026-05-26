'use client';

/**
 * BotonSecundario
 * Botón negro con icono a la izquierda, etiqueta centrada y flecha a la derecha.
 * La flecha se desplaza hacia afuera en hover (efecto definido en CSS).
 *
 * @param {string} icono   - Emoji del icono
 * @param {string} texto   - Etiqueta del botón
 * @param {string} href    - Enlace destino
 * @param {number} delay   - Retardo de la animación de entrada (en segundos)
 */
function BotonSecundario({ icono, texto, href, delay }) {
  return (
    <a
      className="boton-sec aparece"
      href={href}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="icono">{icono}</span>
      <span className="etiqueta">{texto}</span>
      <span className="flecha">→</span>
    </a>
  );
}

/**
 * BotonesSecundarios
 * Lista vertical de los enlaces secundarios de la marca.
 * Cada botón aparece en cascada con un retardo progresivo.
 */
export default function BotonesSecundarios() {
  // Definición de los enlaces. Reemplazar los href marcados con placeholder.
  const enlaces = [
    {
      icono: '🛒',
      texto: 'Ver tienda completa',
      // ENLACE: Tienda completa
      href: 'https://berracosport-store.myshopify.com/',
    },
    {
      icono: '💬',
      texto: 'Escríbenos por WhatsApp',
      // ENLACE: WhatsApp (reemplazar el número 57XXXXXXXXXX)
      href: 'https://wa.me/573245990963?text=Hola%2C%20quiero%20info%20de%20la%20camiseta',
    },
    {
      icono: '🎬',
      texto: 'TikTok',
      // ENLACE: TikTok
      href: 'https://www.tiktok.com/@berracosport.co',
    },
  ];

  return (
    <nav className="lista-botones">
      {enlaces.map((enlace, i) => (
        <BotonSecundario
          key={enlace.texto}
          icono={enlace.icono}
          texto={enlace.texto}
          href={enlace.href}
          // Cascada: arranca después del CTA (0.5s) y suma 0.12s por botón
          delay={0.65 + i * 0.12}
        />
      ))}
    </nav>
  );
}
