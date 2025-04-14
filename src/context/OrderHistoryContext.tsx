import React, { useEffect, useState, createContext, useContext } from 'react';
import { Product } from '../data/products';
interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}
export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  shippingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
}
interface OrderHistoryContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date'>) => void;
  getUserOrders: (userId: string) => Order[];
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}
const OrderHistoryContext = createContext<OrderHistoryContextType | undefined>(undefined);
export const OrderHistoryProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('orders');
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);
  const addOrder = (order: Omit<Order, 'id' | 'date'>) => {
    const newOrder = {
      ...order,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString()
    };
    setOrders(current => {
      const updated = [...current, newOrder];
      localStorage.setItem('orders', JSON.stringify(updated));
      return updated;
    });
  };
  const getUserOrders = (userId: string) => {
    return orders.filter(order => order.userId === userId);
  };
  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(current => {
      const updated = current.map(order => order.id === orderId ? {
        ...order,
        status
      } : order);
      localStorage.setItem('orders', JSON.stringify(updated));
      return updated;
    });
  };
  return <OrderHistoryContext.Provider value={{
    orders,
    addOrder,
    getUserOrders,
    updateOrderStatus
  }}>
      {children}
    </OrderHistoryContext.Provider>;
};
export const useOrderHistory = () => {
  const context = useContext(OrderHistoryContext);
  if (context === undefined) {
    throw new Error('useOrderHistory must be used within an OrderHistoryProvider');
  }
  return context;
};