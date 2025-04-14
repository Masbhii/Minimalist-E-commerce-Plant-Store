import React, { useEffect, useState, createContext, useContext } from 'react';
interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
interface ReviewsContextType {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  getProductReviews: (productId: string) => Review[];
  getUserReviews: (userId: string) => Review[];
}
const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);
export const ReviewsProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('reviews');
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, []);
  const addReview = (review: Omit<Review, 'id' | 'date'>) => {
    const newReview = {
      ...review,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString()
    };
    setReviews(current => {
      const updated = [...current, newReview];
      localStorage.setItem('reviews', JSON.stringify(updated));
      return updated;
    });
  };
  const getProductReviews = (productId: string) => {
    return reviews.filter(review => review.productId === productId);
  };
  const getUserReviews = (userId: string) => {
    return reviews.filter(review => review.userId === userId);
  };
  return <ReviewsContext.Provider value={{
    reviews,
    addReview,
    getProductReviews,
    getUserReviews
  }}>
      {children}
    </ReviewsContext.Provider>;
};
export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewsProvider');
  }
  return context;
};