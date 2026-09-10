import AddToCartButton from './AddToCartButton.jsx';

// ProductCard
// Tarjeta de producto del catálogo. Contiene el disparador de la
// microinteracción "agregar al carrito" (ver AddToCartButton).
export default function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product" data-product-id={product.id}>
      <img className="product__image" src={product.image} alt={product.name} />
      <h3 className="product__name">{product.name}</h3>
      <p className="product__price">
        {new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          maximumFractionDigits: 0,
        }).format(product.price)}
      </p>
      <AddToCartButton onAdd={() => onAddToCart?.(product)} />
    </article>
  );
}
