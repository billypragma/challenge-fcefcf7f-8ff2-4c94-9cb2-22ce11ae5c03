// FilterOptions
// Dispara la microinteracción #3: "resaltado de la opción de filtro
// seleccionada".
//
// FASE 2/3 resuelta: el cambio de estado ahora dispara la animación
// Lottie (checkbox-animation) además de la clase `is-active`.

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import animationData from '../../assets/animations/Checkbox_Animation.lottie';
import './FilterOptions.css';


export default function FilterOptions({ categories, active, onSelect }) {
  return (
    <div className="filter-options" role="tablist">
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            className={`filter-options__item ${isActive ? 'is-active' : ''}`}
            onClick={() => onSelect?.(category)}
          >
            <span className="filter-options__label">{category}</span>

            {/* Se monta solo cuando este chip pasa a activo, así que
                autoplay dispara la animación cada vez que se selecciona
                (incluso si se selecciona el mismo chip dos veces
                seguidas después de pasar por otro). */}
            {isActive && (
              
                <DotLottieReact
                src={animationData}
                autoplay
                aria-hidden="true"
                className='filter-options__check'
                style={{ width: '20px', height: '20px' }}
              />
            
            )}
          </button>
          
        );
        
      })}
    </div>
  );
}

