// FilterOptions
// Dispara la microinteracción #3: "resaltado de la opción de filtro
// seleccionada".
//
// FASE 2/3: hoy el estado activo solo cambia la clase `is-active` sin
// transición. Implementa aquí la animación de resaltado (color, subrayado
// animado, escala, etc.)
export default function FilterOptions({ categories, active, onSelect }) {
  return (
    <div className="filter-options" role="tablist">
      {categories.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={active === category}
          className={`filter-options__item ${
            active === category ? 'is-active' : ''
          }`}
          onClick={() => onSelect?.(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
