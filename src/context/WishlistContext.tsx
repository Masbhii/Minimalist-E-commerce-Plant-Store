import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
export const WishlistProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);
  const addToWishlist = (product: Product) => {
    setWishlist(current => {
      const updated = [...current, product];
      localStorage.setItem('wishlist', JSON.stringify(updated));
      return updated;
    });
  };
  const removeFromWishlist = (productId: string) => {
    setWishlist(current => {
      const updated = current.filter(p => p.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      return updated;
    });
  };
  const isInWishlist = (productId: string) => {
    return wishlist.some(p => p.id === productId);
  };
  return <WishlistContext.Provider value={{
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  }}>
      {children}
    </WishlistContext.Provider>;
};
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};