import { createContext, useContext, useEffect, useRef, useState } from 'react';

const ToastContext = createContext(null);

// Igual patrón que CartContext: un solo lugar donde vive el mensaje
// actual, para que no importa qué componente dispare el toast,
// siempre se muestre en el mismo lugar de la pantalla.
export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);
  const timerRef = useRef(null);

  function show(text) {
    setMessage(text);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setMessage(null), 2200);
  }

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className={`toast ${message ? 'show' : ''}`}>
        <span className="dot" />
        <span>{message}</span>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast debe usarse dentro de <ToastProvider>');
  return ctx;
}