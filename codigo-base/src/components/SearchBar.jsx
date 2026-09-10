import { useState } from 'react';

// SearchBar
// Dispara la microinteracción #2: "expansión del campo de búsqueda".
//
// FASE 2/3: el campo hoy se muestra siempre expandido (estado `expanded`
// fijo en true) a propósito, como placeholder. Implementa aquí la
// transición de expansión/colapso al hacer click en la lupa.
export default function SearchBar({ onSearch }) {
  const [expanded, setExpanded] = useState(true); // TODO (Fase 3): animar este toggle
  const [query, setQuery] = useState('');

  const handleToggle = () => {
    // TODO (Fase 3): reemplazar por una transición real (width/opacity, etc.)
    setExpanded((prev) => !prev);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className={`search-bar ${expanded ? 'search-bar--expanded' : ''}`}>
      <button
        className="search-bar__toggle"
        onClick={handleToggle}
        aria-label="Buscar"
      >
        🔍
      </button>
      {expanded && (
        <input
          className="search-bar__input"
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
