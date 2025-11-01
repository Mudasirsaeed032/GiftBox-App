import React, { createContext, useContext, useState } from "react";

type CartContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState<number>(0); // TODO: hydrate from API
  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
