'use client';

import { useCountdown } from '../hooks/useCountdown';

/**
 * CtaPrincipal
 * Botón destacado para pedir la camiseta de Colombia.
 * Incluye:
 *  - Badge superior con countdown dinámico hasta el Mundial (18 jun 2026)
 *  - Botón rojo Colombia con borde dorado y pulso (animación en CSS)
 *  - Subtexto con beneficios y stock
 */
export default function CtaPrincipal() {
  // Countdown hasta el inicio del Mundial
  const tiempo = useCountdown('2026-06-18T00:00:00');

  // Mientras el cliente calcula, mostramos el valor fijo del brief (23 días)
  const dias = tiempo ? tiempo.dias : 23;

  return (
    <div className="bloque-cta aparece" style={{ animationDelay: '0.5s' }}>
      {/* Badge countdown */}
      <span className="badge-mundial">
        ⏰ <span className="num">POCOS</span> DÍAS PARA EL MUNDIAL
      </span>

      {/* ENLACE: Camiseta Colombia — reemplazar el href */}
      <a
        className="cta-principal"
        href="https://berracosport-store.myshopify.com/collections/all"
      >
        🇨🇴 PEDIR CAMISETA COLOMBIA
      </a>

      {/* Subtexto con beneficios */}
      <p className="cta-sub">
        Envío <strong>GRATIS</strong> · Pago contra entrega ·<strong>LA MEJOR CALIDAD</strong>
      </p>
    </div>
  );
}
