import React from 'react';
import { motion } from 'framer-motion';
import { useSearch } from '../context/SearchContext';
import { ProductCard } from '../components/ProductCard';
import { SearchIcon } from 'lucide-react';
export const SearchPage: React.FC = () => {
  const {
    searchTerm,
    searchResults,
    setSearchTerm
  } = useSearch();
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search for plants, flowers, and accessories..." className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        {searchTerm ? searchResults.length > 0 ? <div>
              <p className="text-gray-600 mb-6">
                Found {searchResults.length} results for "{searchTerm}"
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {searchResults.map((product, index) => <motion.div key={product.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }}>
                    <ProductCard product={product} />
                  </motion.div>)}
              </div>
            </div> : <div className="text-center py-16">
              <SearchIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h2 className="mt-4 text-lg font-medium text-gray-900">
                No results found
              </h2>
              <p className="mt-2 text-gray-500">
                Try adjusting your search terms or browse our categories.
              </p>
            </div> : <div className="text-center py-16">
            <SearchIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Start searching
            </h2>
            <p className="mt-2 text-gray-500">
              Enter a keyword to search our products
            </p>
          </div>}
      </div>
    </motion.div>;
};