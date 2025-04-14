import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
interface ProductCardProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {
    addItem
  } = useCart();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };
  return <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
          <img src={product.image} alt={product.name} className="h-64 w-full object-cover object-center group-hover:opacity-90 transition-opacity" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 font-medium">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <button onClick={handleAddToCart} className="mt-2 w-full bg-green-700 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-green-800 transition-colors">
        <ShoppingCartIcon size={16} className="mr-2" />
        Add to Cart
      </button>
    </div>;
};