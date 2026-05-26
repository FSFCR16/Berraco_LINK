'use client';

import BarraCine from '../components/BarraCine';
import { EsquinasHud, Particulas } from '../components/Decoraciones';
import Logo from '../components/Logo';
import CtaPrincipal from '../components/CtaPrincipal';
import BotonesSecundarios from '../components/BotonesSecundarios';

/**
 * Página principal — BERRACO 57 SPORT
 * Estructura (de arriba a abajo):
 *   1. Barra superior negra (REC)
 *   2. Logo BERRACO 57
 *   3. CTA principal (camiseta Colombia)
 *   4. Botones secundarios
 *   5. Créditos
 *   6. Barra inferior negra
 * Más capas decorativas: textura, diagonales, esquinas HUD y partículas.
 */
export default function Home() {
  return (
    <>
      {/* Capas de fondo (textura de grano + diagonales) */}
      <div className="fondo-textura" />
      <div className="fondo-diagonales" />

      {/* Partículas negras flotantes */}
      <Particulas />

      {/* Esquinas decorativas HUD */}
      <EsquinasHud />

      {/* Barra superior cinemascope */}
      <BarraCine posicion="superior" />

      {/* Contenido central */}
      <main className="escenario">
        <div className="contenedor">
          {/* 2. Logo */}
          <Logo />

          {/* 3. CTA principal */}
          <CtaPrincipal />

          {/* 4. Botones secundarios */}
          <BotonesSecundarios />

          {/* 5. Créditos */}
          <footer
            className="creditos aparece"
            style={{ animationDelay: '1.2s' }}
          >
            © BERRACO 57 SPORT 2024
            <br />
            Hecho en Colombia 🇨🇴
          </footer>
        </div>
      </main>

      {/* Barra inferior cinemascope */}
      <BarraCine posicion="inferior" />
    </>
  );
}
