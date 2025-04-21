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

export const products: Product[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    description: 'The Swiss Cheese Plant, known for its iconic split leaves. Perfect for adding a tropical touch to any room.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'plant',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Peace Lily',
    description: 'An elegant plant with glossy leaves and white flowers. Perfect for purifying the air in your home.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'plant',
    inStock: true
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    description: 'A popular indoor tree with large, violin-shaped leaves that can grow up to 6 feet tall.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1639690355431-c9762ae3fd72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpZGRsZSUyMGxlYWZ8ZW58MHx8MHx8fDA%3D',
    category: 'plant',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Fresh Roses Bouquet',
    description: 'A beautiful bouquet of fresh roses in a variety of colors. Perfect for any occasion.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'flower',
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Tulip Arrangement',
    description: 'A colorful arrangement of fresh tulips. Brings the feel of spring to your home.',
    price: 29.99,
    image: 'https://plus.unsplash.com/premium_photo-1676117273788-56ed2db7f1c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHVsaXAlMjBhcnJhbmdlbWVudHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'flower',
    inStock: true
  },
  {
    id: '6',
    name: 'Ceramic Plant Pot',
    description: 'Minimalist ceramic pot perfect for small to medium plants. Available in white and terracotta.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'accessory',
    inStock: true
  },
  {
    id: '7',
    name: 'Snake Plant',
    description: 'A hardy, low-maintenance plant with stiff, upright leaves. Perfect for beginners.',
    price: 27.99,
    image: 'https://plus.unsplash.com/premium_photo-1673969608395-9281e5e4395f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c25ha2UlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'plant',
    inStock: true
  },
  {
    id: '8',
    name: 'Orchid Plant',
    description: 'Elegant flowering plant with long-lasting blooms. A sophisticated addition to any space.',
    price: 44.99,
    image: 'https://plus.unsplash.com/premium_photo-1676253694654-79c2214ccbc7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JjaGlkJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
    category: 'flower',
    inStock: true,
    featured: true
  },
  {
    id: '9',
    name: 'Sunflower Bouquet',
    description: 'Bright and cheerful bouquet of fresh sunflowers. Perfect to bring happiness to any room.',
    price: 32.99,
    image: 'https://media.istockphoto.com/id/1344015590/photo/bunch-of-sunflowers-in-red-bucket-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=GxzZtPQtJB7qLU04tvGUu9_PFbqzfaXFkgT-ebPicqg=',
    category: 'flower',
    inStock: true
  },
  {
    id: '10',
    name: 'Lily Arrangement',
    description: 'Elegant arrangement of lilies for a sophisticated touch in your home.',
    price: 36.99,
    image: 'https://media.istockphoto.com/id/1998333035/photo/bouquet-of-flowers-with-space-for-copy.webp?a=1&b=1&s=612x612&w=0&k=20&c=W5SDOAKCH6yw4FQP6s33hdMfLcgCTFSl8j9b44bkIoI=',
    category: 'flower',
    inStock: true
  },
  {
    id: '11',
    name: 'Glass Vase',
    description: 'Transparent glass vase, perfect for displaying your favorite flowers.',
    price: 14.99,
    image: 'https://media.istockphoto.com/id/2147545900/photo/clear-glass-vase-on-white-surface.webp?a=1&b=1&s=612x612&w=0&k=20&c=561cqI2KW7JdntddJPNeRnMBwLefLCPWToA3ggpm3co=',
    category: 'accessory',
    inStock: true
  },
  {
    id: '12',
    name: 'Watering Can',
    description: 'Minimalist metal watering can for easy plant care.',
    price: 17.99,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'accessory',
    inStock: true
  },
  {
    id: '13',
    name: 'Macrame Plant Hanger',
    description: 'Handmade macrame hanger to display your plants stylishly.',
    price: 12.99,
    image: 'https://plus.unsplash.com/premium_photo-1675783105468-7fb8e0a3e7e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFjcmFtZSUyMHBsYW50JTIwaGFuZ2VyfGVufDB8fDB8fHww',
    category: 'accessory',
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};