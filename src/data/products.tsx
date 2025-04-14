import React from 'react';
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'plant' | 'flower' | 'accessory';
  inStock: boolean;
  featured?: boolean;
}
export const products: Product[] = [{
  id: '1',
  name: 'Monstera Deliciosa',
  description: 'The Swiss Cheese Plant, known for its iconic split leaves. Perfect for adding a tropical touch to any room.',
  price: 39.99,
  image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'plant',
  inStock: true,
  featured: true
}, {
  id: '2',
  name: 'Peace Lily',
  description: 'An elegant plant with glossy leaves and white flowers. Perfect for purifying the air in your home.',
  price: 24.99,
  image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'plant',
  inStock: true
}, {
  id: '3',
  name: 'Fiddle Leaf Fig',
  description: 'A popular indoor tree with large, violin-shaped leaves that can grow up to 6 feet tall.',
  price: 49.99,
  image: 'https://images.unsplash.com/photo-1606248895016-de5be8a2c94d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'plant',
  inStock: true,
  featured: true
}, {
  id: '4',
  name: 'Fresh Roses Bouquet',
  description: 'A beautiful bouquet of fresh roses in a variety of colors. Perfect for any occasion.',
  price: 34.99,
  image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'flower',
  inStock: true,
  featured: true
}, {
  id: '5',
  name: 'Tulip Arrangement',
  description: 'A colorful arrangement of fresh tulips. Brings the feel of spring to your home.',
  price: 29.99,
  image: 'https://images.unsplash.com/photo-1520575839349-52ff2532d910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'flower',
  inStock: true
}, {
  id: '6',
  name: 'Ceramic Plant Pot',
  description: 'Minimalist ceramic pot perfect for small to medium plants. Available in white and terracotta.',
  price: 19.99,
  image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'accessory',
  inStock: true
}, {
  id: '7',
  name: 'Snake Plant',
  description: 'A hardy, low-maintenance plant with stiff, upright leaves. Perfect for beginners.',
  price: 27.99,
  image: 'https://images.unsplash.com/photo-1620127252536-03bcc50d3792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'plant',
  inStock: true
}, {
  id: '8',
  name: 'Orchid Plant',
  description: 'Elegant flowering plant with long-lasting blooms. A sophisticated addition to any space.',
  price: 44.99,
  image: 'https://images.unsplash.com/photo-1566907225472-514a2c99ab2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  category: 'flower',
  inStock: true,
  featured: true
}];
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};