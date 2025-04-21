import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { getFeaturedProducts } from '../data/products';
export const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
        <div className="h-[70vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}></div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h1 className="text-4xl font-serif font-medium text-gray-900 sm:text-5xl">
                Bring Nature Into Your Home
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Discover our curated collection of plants and flowers to
                transform your space.
              </p>
              <div className="mt-8 flex">
                <Link to="/products">
                  <Button size="large">Shop Now</Button>
                </Link>
                <Link to="/products" className="ml-4">
                  <Button variant="outline" size="large">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12 text-gray-900">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plants Category */}
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1090&q=80" alt="Plants Collection" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium">
                    Indoor Plants
                  </h3>
                  <Link to="/products" className="mt-2 inline-flex items-center text-white hover:underline">
                    Shop Now <ArrowRightIcon size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Flowers Category */}
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Flowers Collection" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium">
                    Fresh Flowers
                  </h3>
                  <Link to="/products" className="mt-2 inline-flex items-center text-white hover:underline">
                    Shop Now <ArrowRightIcon size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Accessories Category */}
            <div className="relative rounded-lg overflow-hidden group h-80">
              <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Accessories Collection" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-medium">
                    Plant Accessories
                  </h3>
                  <Link to="/products" className="mt-2 inline-flex items-center text-white hover:underline">
                    Shop Now <ArrowRightIcon size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif text-gray-900">
              Featured Products
            </h2>
            <Link to="/products" className="text-green-700 hover:text-green-800 flex items-center">
              View All <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Bloom & Grow was founded with a simple mission: to bring the
                beauty and benefits of plants into everyday life.
              </p>
              <p className="text-gray-600 mb-4">
                We carefully select each plant and flower in our collection,
                ensuring they're healthy, beautiful, and ready to thrive in your
                home.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of plant experts is passionate about helping you find
                the perfect greenery for your space and providing the knowledge
                you need to keep them flourishing.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="Plant nursery" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12 text-gray-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-4">
                "The plants arrived in perfect condition and have been thriving
                ever since. The care instructions were so helpful!"
              </p>
              <p className="font-medium">- Sarah T.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-4">
                "I've ordered flowers multiple times, and they're always fresh
                and last much longer than ones from other shops."
              </p>
              <p className="font-medium">- Michael R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-4">
                "Their customer service is exceptional. When one of my plants
                had an issue, they immediately sent a replacement."
              </p>
              <p className="font-medium">- Emma L.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Community</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for plant care tips, special offers, and
            first access to new arrivals.
          </p>
          <form className="max-w-md mx-auto flex">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-l-md text-gray-900 focus:outline-none" />
            <button type="submit" className="bg-gray-900 px-6 py-3 rounded-r-md hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>;
};