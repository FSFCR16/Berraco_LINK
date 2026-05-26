'use client';

/**
 * BarraCine
 * Barra negra estilo cinemascope. Se usa arriba y abajo de la pantalla.
 * La barra superior muestra el indicador REC parpadeante y el canal.
 * La barra inferior muestra el año de fundación y la división.
 *
 * @param {'superior' | 'inferior'} posicion
 */
export default function BarraCine({ posicion }) {
  if (posicion === 'superior') {
    return (
      <div className="barra-cine superior">
        <div className="lado">
          <span className="punto-rec" />
          <span>REC · BRC57</span>
        </div>
        <div className="lado">
          <span>CH · 057</span>
        </div>
      </div>
    );
  }

  return (
    <div className="barra-cine inferior">
      <div className="lado">
        <span>EST · 2024</span>
      </div>
      <div className="lado">
        <span>SPORT DIV.</span>
      </div>
    </div>
  );
}
