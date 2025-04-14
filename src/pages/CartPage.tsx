import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TrashIcon, ArrowLeftIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
export const CartPage: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    totalPrice,
    clearCart
  } = useCart();
  const navigate = useNavigate();
  const isEmpty = items.length === 0;
  return <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Your Cart</h1>
        {isEmpty ? <div className="text-center py-16">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added any plants or flowers to your cart
              yet.
            </p>
            <Link to="/products">
              <Button size="large">Continue Shopping</Button>
            </Link>
          </div> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border-b border-gray-200 pb-6 mb-6">
                {items.map(item => <div key={item.product.id} className="flex py-6 border-b border-gray-200 last:border-0">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.product.name}</h3>
                        <p className="ml-4">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 capitalize">
                        {item.product.category}
                      </p>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-gray-200 rounded">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                            +
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.product.id)} className="text-red-600 hover:text-red-800 flex items-center">
                          <TrashIcon size={16} className="mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>)}
              </div>
              <div className="flex justify-between">
                <button onClick={() => navigate('/products')} className="text-green-700 hover:text-green-800 flex items-center">
                  <ArrowLeftIcon size={16} className="mr-2" />
                  Continue Shopping
                </button>
                <button onClick={clearCart} className="text-gray-500 hover:text-gray-700">
                  Clear Cart
                </button>
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-base text-gray-600">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-base text-gray-600">
                    <p>Shipping</p>
                    <p>{totalPrice > 50 ? 'Free' : '$4.99'}</p>
                  </div>
                  <div className="flex justify-between text-base text-gray-600">
                    <p>Tax</p>
                    <p>${(totalPrice * 0.07).toFixed(2)}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>
                        $
                        {(totalPrice + (totalPrice > 50 ? 0 : 4.99) + totalPrice * 0.07).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button onClick={() => navigate('/checkout')} fullWidth size="large">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};