'use client';

import { useMemo } from 'react';

/**
 * EsquinasHud
 * Las 4 esquinas decorativas estilo HUD/cámara en las esquinas de la pantalla.
 */
export function EsquinasHud() {
  return (
    <>
      <div className="esquina tl" />
      <div className="esquina tr" />
      <div className="esquina bl" />
      <div className="esquina br" />
    </>
  );
}

/**
 * Particulas
 * 10 puntos negros flotantes decorativos repartidos por el fondo,
 * cada uno con una posición, retardo y duración ligeramente distintos.
 */
export function Particulas() {
  // useMemo: las posiciones se calculan una sola vez (no en cada render)
  const puntos = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        top: `${10 + Math.random() * 80}%`,
        left: `${5 + Math.random() * 90}%`,
        delay: `${Math.random() * 5}s`,
        duracion: `${4 + Math.random() * 4}s`,
        escala: 0.6 + Math.random() * 1.1,
      })),
    []
  );

  return (
    <>
      {puntos.map((p) => (
        <span
          key={p.id}
          className="particula"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duracion,
            transform: `scale(${p.escala})`,
          }}
        />
      ))}
    </>
  );
}
