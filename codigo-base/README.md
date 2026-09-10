# eCommerce VTEX — Microinteracciones y Animaciones

Proyecto base (React + Vite) para el reto **"Implementación de animaciones y
transiciones en microinteracciones de eCommerce"** (Chapter Frontend,
Especialidad eCommerce, Tecnología VTEX, Advanced).

Este repo trae **solo la estructura arrancable**: componentes de catálogo,
búsqueda, filtros y carrito ya funcionan a nivel de estado/lógica, pero
**sin las animaciones**, que son tu entregable. Están marcadas con
comentarios `TODO (Fase 3)` en el código.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Estructura

```
src/
  components/
    ProductCard.jsx       # tarjeta de producto
    AddToCartButton.jsx   # microinteracción 1: agregar al carrito
    CartIcon.jsx          # destino de la animación de "vuelo" del producto
    SearchBar.jsx         # microinteracción 2: expansión del buscador
    FilterOptions.jsx     # microinteracción 3: resaltado de filtro activo
  data/
    products.js           # datos de ejemplo
  App.jsx
  index.css
docs/
  fase1-analisis-microinteracciones.md
  fase2-diseno-animaciones.md
  fase3-implementacion-pruebas.md
```

## Tus fases (a completar)

1. **Análisis** — `docs/fase1-analisis-microinteracciones.md`
2. **Diseño** — `docs/fase2-diseno-animaciones.md`
3. **Implementación y prueba** — código en `src/components/` +
   `docs/fase3-implementacion-pruebas.md`

Puedes usar CSS transitions/keyframes, la Web Animations API, o una
librería (Framer Motion, GSAP, react-spring) — no está restringido, ninguna
viene preinstalada.
