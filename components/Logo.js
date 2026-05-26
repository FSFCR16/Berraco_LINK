'use client';

/**
 * Logo
 * Logo de la marca:
 *  - Cuadrado negro con el número 57 en amarillo (Archivo Black)
 *  - Separador: línea negra delgada
 *  - "BERRACO" en Archivo Black negro
 *  - "SPORT" en Oswald light con letter-spacing amplio
 *
 * La animación de entrada (blur + scale) se define en globals.css (.logo).
 */
export default function Logo() {
  return (
    <div className="logo">
      <div className="logo-fila">
        {/* Cuadrado negro con el 57 */}
        <div className="logo-cuadro">
          <span>57</span>
        </div>

        {/* Separador vertical */}
        <div className="logo-separador" />

        {/* Texto BERRACO / SPORT */}
        <div className="logo-texto">
          <span className="berraco">BERRACO</span>
          <span className="sport">SPORT</span>
        </div>
      </div>
    </div>
  );
}
