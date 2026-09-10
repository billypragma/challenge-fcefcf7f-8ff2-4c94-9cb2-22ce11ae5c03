// AddToCartButton
// Dispara la microinteracción #1: "agregar producto al carrito".
//
// FASE 1 (Análisis): documenta aquí qué mejora aporta la animación
// (docs/fase1-analisis-microinteracciones.md).
// FASE 3 (Implementación): reemplaza el onClick de abajo por la animación
// real (CSS transitions, Web Animations API, Framer Motion, GSAP, etc.)
export default function AddToCartButton({ onAdd }) {
  const handleClick = () => {
    // TODO (Fase 3): animar la transición del producto hacia el CartIcon
    // antes o durante la ejecución de onAdd().
    onAdd?.();
  };

  return (
    <button className="add-to-cart-btn" onClick={handleClick}>
      Agregar al carrito
    </button>
  );
}
