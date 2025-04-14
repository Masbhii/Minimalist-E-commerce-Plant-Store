import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { WishlistProvider } from './context/WishlistContext';
import { SearchProvider } from './context/SearchContext';
import { ReviewsProvider } from './context/ReviewsContext';
import { OrderHistoryProvider } from './context/OrderHistoryContext';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AccountPage } from './pages/AccountPage';
import { WishlistPage } from './pages/WishlistPage';
import { ProfilePage } from './pages/ProfilePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { SearchPage } from './pages/SearchPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_placeholder');
const AppContent = () => {
  const location = useLocation();
  return <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <AnimatePresence mode="wait">
        <main className="flex-grow">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/category/:category" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
      </AnimatePresence>
      <Footer />
    </div>;
};
export function App() {
  return <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <RecentlyViewedProvider>
            <WishlistProvider>
              <SearchProvider>
                <ReviewsProvider>
                  <OrderHistoryProvider>
                    <Elements stripe={stripePromise}>
                      <AppContent />
                    </Elements>
                  </OrderHistoryProvider>
                </ReviewsProvider>
              </SearchProvider>
            </WishlistProvider>
          </RecentlyViewedProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>;
}