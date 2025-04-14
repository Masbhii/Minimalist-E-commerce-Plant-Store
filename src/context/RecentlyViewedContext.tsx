import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
interface RecentlyViewedContextType {
  recentlyViewed: Product[];
  addToRecentlyViewed: (product: Product) => void;
  clearRecentlyViewed: () => void;
}
const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);
export const RecentlyViewedProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('recentlyViewed');
    if (saved) {
      setRecentlyViewed(JSON.parse(saved));
    }
  }, []);
  const addToRecentlyViewed = (product: Product) => {
    setRecentlyViewed(current => {
      const filtered = current.filter(p => p.id !== product.id);
      const updated = [product, ...filtered].slice(0, 10);
      localStorage.setItem('recentlyViewed', JSON.stringify(updated));
      return updated;
    });
  };
  const clearRecentlyViewed = () => {
    setRecentlyViewed([]);
    localStorage.removeItem('recentlyViewed');
  };
  return <RecentlyViewedContext.Provider value={{
    recentlyViewed,
    addToRecentlyViewed,
    clearRecentlyViewed
  }}>
      {children}
    </RecentlyViewedContext.Provider>;
};
export const useRecentlyViewed = () => {
  const context = useContext(RecentlyViewedContext);
  if (context === undefined) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
};