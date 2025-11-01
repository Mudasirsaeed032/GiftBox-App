import React, { createContext, useContext, useState } from "react";

type WishlistContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState<number>(0); // TODO: hydrate from API
  return (
    <WishlistContext.Provider value={{ count, setCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};
