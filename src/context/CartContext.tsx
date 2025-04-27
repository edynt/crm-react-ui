import { createContext, useState, useContext, ReactNode } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    console.log('addToCart item', item)
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId: string) => {
    console.log('removeFromCart item', itemId)
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
