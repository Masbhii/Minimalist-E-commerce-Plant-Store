import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
interface CartItem {
  product: Product;
  quantity: number;
}
interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);
  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  const addItem = (product: Product, quantity: number = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return currentItems.map(item => item.product.id === product.id ? {
          ...item,
          quantity: item.quantity + quantity
        } : item);
      } else {
        return [...currentItems, {
          product,
          quantity
        }];
      }
    });
  };
  const removeItem = (productId: string) => {
    setItems(currentItems => currentItems.filter(item => item.product.id !== productId));
  };
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(currentItems => currentItems.map(item => item.product.id === productId ? {
      ...item,
      quantity
    } : item));
  };
  const clearCart = () => {
    setItems([]);
  };
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  return <CartContext.Provider value={{
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice
  }}>
      {children}
    </CartContext.Provider>;
};
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};