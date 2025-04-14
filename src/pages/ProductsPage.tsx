import React, { useState } from 'react';
import { FilterIcon } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '../components/Button';
export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;
  const categories = [{
    id: 'plant',
    name: 'Plants'
  }, {
    id: 'flower',
    name: 'Flowers'
  }, {
    id: 'accessory',
    name: 'Accessories'
  }];
  return <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Our Products</h1>
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Mobile filter dialog */}
          <div className="lg:hidden mb-6">
            <Button onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)} variant="outline" fullWidth>
              <FilterIcon size={16} className="mr-2" />
              Filters
            </Button>
            {isMobileFilterOpen && <div className="mt-4 p-4 border border-gray-200 rounded-md">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <div className="space-y-2">
                  <button onClick={() => setSelectedCategory(null)} className={`block w-full text-left px-2 py-1 rounded ${selectedCategory === null ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}>
                    All Products
                  </button>
                  {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`block w-full text-left px-2 py-1 rounded ${selectedCategory === category.id ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}>
                      {category.name}
                    </button>)}
                </div>
              </div>}
          </div>
          {/* Sidebar filters - desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <div className="space-y-2">
              <button onClick={() => setSelectedCategory(null)} className={`block w-full text-left px-2 py-1 rounded ${selectedCategory === null ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}>
                All Products
              </button>
              {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`block w-full text-left px-2 py-1 rounded ${selectedCategory === category.id ? 'bg-green-100 text-green-800' : 'text-gray-700'}`}>
                  {category.name}
                </button>)}
            </div>
          </div>
          {/* Product grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            {filteredProducts.length === 0 && <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found in this category.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};