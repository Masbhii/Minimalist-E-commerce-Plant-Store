import React, { useMemo, useState, createContext, useContext } from 'react';
import Fuse from 'fuse.js';
import { Product, products } from '../data/products';
interface SearchContextType {
  searchTerm: string;
  searchResults: Product[];
  setSearchTerm: (term: string) => void;
  clearSearch: () => void;
}
const SearchContext = createContext<SearchContextType | undefined>(undefined);
export const SearchProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const fuse = useMemo(() => new Fuse(products, {
    keys: ['name', 'description', 'category'],
    threshold: 0.4
  }), []);
  const searchResults = useMemo(() => {
    if (!searchTerm) return [];
    return fuse.search(searchTerm).map(result => result.item);
  }, [searchTerm, fuse]);
  const clearSearch = () => setSearchTerm('');
  return <SearchContext.Provider value={{
    searchTerm,
    searchResults,
    setSearchTerm,
    clearSearch
  }}>
      {children}
    </SearchContext.Provider>;
};
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};