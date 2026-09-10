// CartIcon
// Punto de destino visual para la microinteracción "agregar al carrito".
//
// FASE 2 (Diseño): aquí debe llegar la animación del producto que "vuela"
// desde el botón de agregar hasta este ícono (ver docs/fase2-diseno-animaciones.md).
// FASE 3 (Implementación): conecta aquí la lógica de animación real.
export default function CartIcon({ itemCount = 0 }) {
  return (
    <div className="cart-icon" data-testid="cart-icon">
      {/* TODO (Fase 3): ref/target para la animación de "vuelo" del producto */}
      <span className="cart-icon__glyph" aria-hidden="true">
        🛒
      </span>
      <span className="cart-icon__count">{itemCount}</span>
    </div>
  );
}
