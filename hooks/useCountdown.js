'use client';

import { useEffect, useState } from 'react';

/**
 * useCountdown
 * Calcula el tiempo restante hasta una fecha objetivo.
 * Devuelve los días, horas, minutos y segundos restantes.
 *
 * @param {string} fechaObjetivo - Fecha ISO destino (ej: '2026-06-18T00:00:00')
 */
export function useCountdown(fechaObjetivo) {
  // Función que calcula la diferencia entre ahora y la fecha objetivo
  const calcular = () => {
    const destino = new Date(fechaObjetivo).getTime();
    const ahora = Date.now();
    const diferencia = Math.max(destino - ahora, 0);

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
      terminado: diferencia === 0,
    };
  };

  // Estado inicial: empezamos en null para evitar desajustes de hidratación
  // (el servidor no debe renderizar un número que el cliente cambiaría enseguida)
  const [tiempo, setTiempo] = useState(null);

  useEffect(() => {
    // Primer cálculo apenas monta el componente en el cliente
    setTiempo(calcular());

    // Actualiza cada segundo
    const intervalo = setInterval(() => {
      setTiempo(calcular());
    }, 1000);

    return () => clearInterval(intervalo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fechaObjetivo]);

  return tiempo;
}
