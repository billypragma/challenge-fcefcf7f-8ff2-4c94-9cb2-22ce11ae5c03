// CartIcon
// Punto de destino visual para la microinteracción "agregar al carrito".
//
// FASE 2 (Diseño): aquí debe llegar la animación del producto que "vuela"
// desde el botón de agregar hasta este ícono (ver docs/fase2-diseno-animaciones.md).
// FASE 3 (Implementación): conecta aquí la lógica de animación real.
import { useEffect, useRef, useState } from "react";
//import { useCart } from "../context/CartContext";


export default function CartIcon({ itemCount }) { 
  //const { count } = useCart(); 
  const iconRef = useRef(null);
  const prevCount = useRef(itemCount); 
  const [bump, setBump] = useState(false);
  const [pop, setPop] = useState(false);

  useEffect (() => {
    // Solo animamos si el contador SUBIÓ (no en el render inicial) 
    if (itemCount > prevCount.current) {
      setBump(true); 
      setPop(true);


      const t1 = setTimeout(() => setBump(false), 500);
      const t2 = setTimeout(() => setPop(false), 400);


      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
    prevCount.current = itemCount; 
  }, [itemCount]);

  return (
    <div className="cart-icon" data-testid="cart-icon">
      {/* TODO (Fase 3): ref/target para la animación de "vuelo" del producto */}
      <span id="cart-target" className={`cart-icon cart-icon__glyph ${bump ? 'bump' : ''}`}  aria-hidden="true" ref={iconRef}>
        🛒
      </span>
      <span className={`badge ${pop ? 'pop' : ''}`}>{itemCount}</span>
    </div>
  );
}
