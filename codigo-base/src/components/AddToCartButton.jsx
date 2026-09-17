// AddToCartButton
// Dispara la microinteracción #1: "agregar producto al carrito".
//
// FASE 1 (Análisis): documenta aquí qué mejora aporta la animación
// (docs/fase1-analisis-microinteracciones.md).
// FASE 3 (Implementación): reemplaza el onClick de abajo por la animación
// real (CSS transitions, Web Animations API, Framer Motion, GSAP, etc.)
import { useState } from 'react';

export default function AddToCartButton({ onAdd }) {
  // Fase 3 resuelta: el botón se ocupa SOLO de su propio feedback visual
  // (ripple + estado). No sabe nada de coordenadas del producto ni del
  // carrito — eso es responsabilidad de quien lo use (ProductCard).
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

  const handleClick = (e) => {
    if (status !== 'idle') return; // evita doble-click mientras anima

    spawnRipple(e);

    setStatus('loading');
    setTimeout(() => setStatus('success'), 550);
    setTimeout(() => setStatus('idle'), 1600);

    // Este es el mismo onAdd que ya tenías. El padre decide qué hacer:
    // en nuestro caso, dispara la animación de vuelo hacia el carrito.
    onAdd?.();
  };

  function spawnRipple(e) {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const span = document.createElement('span');
    span.className = 'ripple';
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(span);
    span.addEventListener('animationend', () => span.remove());
  }

  return (
    <button
      className={`add-to-cart-btn ${status === 'loading' ? 'loading' : ''} ${status === 'success' ? 'success' : ''}`}
      onClick={handleClick}
    >
      <span className="label">Agregar al carrito</span>
      <span className="check">✓ Agregado</span>
    </button>
  );
}
