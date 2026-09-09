const animateAddToCart = () => {
  // Ejemplo de animación al agregar un producto al carrito
  document.querySelector('.add-to-cart-button').addEventListener('click', () => {
    const product = document.querySelector('.product');
    product.style.transition = 'transform 0.3s ease-out';
    product.style.transform = 'translateX(100px)';
  });
};

animateAddToCart();