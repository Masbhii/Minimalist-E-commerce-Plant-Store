import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useOrderHistory } from '../context/OrderHistoryContext';
import { Button } from '../components/Button';
import { CheckIcon } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const {
    items,
    totalPrice,
    clearCart
  } = useCart();
  const {
    isAuthenticated,
    user
  } = useAuth();
  const { addOrder } = useOrderHistory();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    email: user?.email || '',
    phone: ''
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);
    setError(null);
    // In a real app, you would create a payment intent on your server
    // For this demo, we'll simulate a successful payment after a delay
    setTimeout(() => {
      setIsProcessing(false);
      setStep('confirmation');
    }, 2000);
  };

  const handleOrderComplete = () => {
    // Tambahkan order ke order history sebelum clearCart
    addOrder({
      userId: user.id,
      items: items.map(item => ({
        product: item.product,
        quantity: item.quantity,
        price: item.product.price
      })),
      total: totalPrice,
      shippingAddress: {
        firstName: shippingDetails.firstName,
        lastName: shippingDetails.lastName,
        address: shippingDetails.address,
        city: shippingDetails.city,
        state: shippingDetails.state,
        zipCode: shippingDetails.zipCode
      }
    });
    clearCart();
    navigate('/');
  };

  if (items.length === 0 && step !== 'confirmation') {
    navigate('/cart');
    return null;
  }

  const shippingCost = totalPrice > 50 ? 0 : 4.99;
  const tax = totalPrice * 0.07;
  const orderTotal = totalPrice + shippingCost + tax;

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">Checkout</h1>
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-center">
            <ol className="flex items-center w-full max-w-3xl">
              <li className={`flex items-center ${step === 'shipping' ? 'text-green-700' : 'text-gray-500'}`}>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'shipping' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>
                  1
                </span>
                <span className="ml-2">Shipping</span>
              </li>
              <li className="flex-1 h-0.5 mx-4 bg-gray-200"></li>
              <li className={`flex items-center ${step === 'payment' ? 'text-green-700' : 'text-gray-500'}`}>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'payment' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>
                  2
                </span>
                <span className="ml-2">Payment</span>
              </li>
              <li className="flex-1 h-0.5 mx-4 bg-gray-200"></li>
              <li className={`flex items-center ${step === 'confirmation' ? 'text-green-700' : 'text-gray-500'}`}>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full ${step === 'confirmation' ? 'bg-green-100 text-green-700' : 'bg-gray-100'}`}>
                  3
                </span>
                <span className="ml-2">Confirmation</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === 'shipping' && (
              <form onSubmit={handleShippingSubmit}>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={shippingDetails.firstName}
                        onChange={handleShippingChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={shippingDetails.lastName}
                        onChange={handleShippingChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingDetails.address}
                        onChange={handleShippingChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingDetails.city}
                        onChange={handleShippingChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={shippingDetails.state}
                          onChange={handleShippingChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={shippingDetails.zipCode}
                          onChange={handleShippingChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={shippingDetails.email}
                        onChange={handleShippingChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={shippingDetails.phone}
                        onChange={handleShippingChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button type="submit" fullWidth>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              </form>
            )}
            {step === 'payment' && (
              <form onSubmit={handlePaymentSubmit}>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">
                    Payment Information
                  </h2>
                  <div className="mb-6">
                    <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-2">
                      Card Details
                    </label>
                    <div className="border border-gray-300 rounded-md p-4">
                      <CardElement
                        options={{
                          style: {
                            base: {
                              fontSize: '16px',
                              color: '#424770',
                              '::placeholder': {
                                color: '#aab7c4'
                              }
                            },
                            invalid: {
                              color: '#9e2146'
                            }
                          }
                        }}
                      />
                    </div>
                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                    <p className="text-gray-500 text-sm mt-2">
                      For testing, use card number: 4242 4242 4242 4242, any
                      future date, any CVC.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep('shipping')}>
                      Back to Shipping
                    </Button>
                    <Button type="submit" disabled={!stripe || isProcessing}>
                      {isProcessing ? 'Processing...' : 'Place Order'}
                    </Button>
                  </div>
                </div>
              </form>
            )}
            {step === 'confirmation' && (
              <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckIcon size={32} className="text-green-700" />
                </div>
                <h2 className="text-2xl font-medium text-gray-900 mb-2">
                  Thank You For Your Order!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your order has been placed and will be processed soon. We've
                  sent a confirmation email to {shippingDetails.email}.
                </p>
                <div className="text-left bg-gray-50 p-4 rounded-md mb-6">
                  <h3 className="font-medium mb-2">Order Summary</h3>
                  <p className="text-sm text-gray-600">Order #: 12345-DEMO</p>
                  <p className="text-sm text-gray-600">
                    Date: {new Date().toLocaleDateString()}
                  </p>
                </div>
                <Button onClick={handleOrderComplete}>Continue Shopping</Button>
              </div>
            )}
          </div>
          {/* Order Summary */}
          {step !== 'confirmation' && (
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-24">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>
                <div className="max-h-60 overflow-y-auto mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex py-3 border-b border-gray-200 last:border-0">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-3 flex flex-1 flex-col">
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <h4>{item.product.name}</h4>
                          <p className="ml-1">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Subtotal</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Shipping</p>
                    <p>
                      {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                    </p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Tax</p>
                    <p>${tax.toFixed(2)}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>${orderTotal.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};