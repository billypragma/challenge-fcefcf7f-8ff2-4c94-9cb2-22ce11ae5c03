/* import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [count, setCount] = useState(0); 

    const addToCart = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []); 

    return (
        <CartContext.Provider value={{ count, addToCart }}>
            {children}
        </CartContext.Provider>
    );

}

// hook custom 
export function useCart() { 
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart debe usarse dentro de un CartProvider");
    return ctx;
} */