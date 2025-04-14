import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { ShoppingBagIcon } from 'lucide-react';
export const WishlistPage: React.FC = () => {
  const {
    wishlist
  } = useWishlist();
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">My Wishlist</h1>
        {wishlist.length === 0 ? <div className="text-center py-16">
            <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-lg font-medium text-gray-900">
              Your wishlist is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Browse our collection and add items you love to your wishlist.
            </p>
            <Link to="/products" className="mt-6 inline-block">
              <Button>Browse Products</Button>
            </Link>
          </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((product, index) => <motion.div key={product.id} initial={{
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
          </div>}
      </div>
    </motion.div>;
};