import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useToast } from './Toast.jsx';
import AddToCartButton from './AddToCartButton.jsx';

// ProductCard
// Tarjeta de producto del catálogo. Contiene el disparador de la
// microinteracción "agregar al carrito" (ver AddToCartButton).
export default function ProductCard({ product, onAddToCart }) {
  // ref a la imagen REAL del producto: es el punto de origen del vuelo
  const imgRef = useRef(null);
  const [ghost, setGhost] = useState(null);
  const { show } = useToast();
 
  // Esto reemplaza tu `onAdd={() => onAddToCart?.(product)}` directo.
  // Ahora primero disparamos la animación, y onAddToCart se llama
  // recién cuando el "vuelo" termina (ver setTimeout en flyToCart).
  function handleAdd() {
    flyToCart();
  }
 
  function flyToCart() {
    const cartTarget = document.getElementById('cart-target');
 
    // Salvaguarda: si por algún motivo no existe el target (por ejemplo
    // en un test, o si el CartIcon todavía no montó), no rompemos el
    // flujo de negocio — igual sumamos el producto al carrito.
    if (!imgRef.current || !cartTarget) {
      onAddToCart?.(product);
      return;
    }
 
    const origin = imgRef.current.getBoundingClientRect();
    const target = cartTarget.getBoundingClientRect();
 
    setGhost({
      top: origin.top,
      left: origin.left,
      width: origin.width,
      height: origin.height,
      dx: target.left + target.width / 2 - (origin.left + origin.width / 2),
      dy: target.top + target.height / 2 - (origin.top + origin.height / 2),
      flying: false,
    });
 
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setGhost((g) => (g ? { ...g, flying: true } : g));
      });
    });
 
    setTimeout(() => {
      setGhost(null);
      onAddToCart?.(product); // tu callback original, sin cambios
      show(`Se agregó "${product.name}" al carrito`);
    }, 650);
  }
 
  return (
    <article className="product" data-product-id={product.id}>
      <img
        ref={imgRef}
        className="product__image"
        src={product.image}
        alt={product.name}
      />
      <h3 className="product__name">{product.name}</h3>
      <p className="product__price">
        {new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          maximumFractionDigits: 0,
        }).format(product.price)}
      </p>
      <AddToCartButton onAdd={handleAdd} />
 
      {/* Ghost = la imagen real del producto, no un placeholder */}
      {ghost && createPortal(
        <img
          src={product.image}
          alt=""
          aria-hidden="true"
          className="flying-ghost"
          style={{
            top: ghost.top,
            left: ghost.left,
            width: ghost.flying ? 14 : ghost.width,
            height: ghost.flying ? 14 : ghost.height,
            opacity: ghost.flying ? 0.15 : 1,
            transform: ghost.flying ? `translate(${ghost.dx}px, ${ghost.dy}px)` : 'translate(0,0)',
          }}
        />,
        document.body
      )}
    </article>
  );
}
