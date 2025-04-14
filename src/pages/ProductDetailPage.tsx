import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { MinusIcon, PlusIcon, LeafIcon, TruckIcon, HeartIcon } from 'lucide-react';
export const ProductDetailPage: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    addItem
  } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = id ? getProductById(id) : null;
  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-medium text-gray-900">
          Product not found
        </h1>
        <p className="mt-4 text-gray-500">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate('/products')} className="mt-6">
          Back to Products
        </Button>
      </div>;
  }
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  return <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden bg-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" style={{
            maxHeight: '600px'
          }} />
          </div>
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-serif text-gray-900">
              {product.name}
            </h1>
            <p className="mt-2 text-gray-500 capitalize">{product.category}</p>
            <div className="mt-4">
              <p className="text-2xl font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <div className="mt-6 border-t border-b border-gray-200 py-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div className="mt-6">
              {/* Quantity Selector */}
              <div className="flex items-center">
                <span className="mr-4 text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button onClick={decreaseQuantity} className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                    <MinusIcon size={16} />
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button onClick={increaseQuantity} className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                    <PlusIcon size={16} />
                  </button>
                </div>
              </div>
              {/* Add to Cart Button */}
              <div className="mt-6 flex space-x-4">
                <Button onClick={handleAddToCart} size="large" fullWidth>
                  Add to Cart
                </Button>
                <Button variant="outline" size="large">
                  <HeartIcon size={20} />
                </Button>
              </div>
            </div>
            {/* Product Features */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <LeafIcon size={20} className="text-green-700" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Plant Care
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category === 'plant' ? 'Water once a week, place in indirect sunlight.' : product.category === 'flower' ? 'Change water every 2 days, trim stems regularly.' : 'Clean regularly with a damp cloth.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <TruckIcon size={20} className="text-green-700" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    Shipping
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Free shipping on orders over $50. Ships within 1-2 business
                    days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};