import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    login
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // Get the return URL from location state or default to home
  const from = location.state?.from?.pathname || '/';
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, {
          replace: true
        });
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="w-full bg-white">
      <div className="max-w-md mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-gray-600">Sign in to your account</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          {error && <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-green-700 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/forgot-password" className="text-green-700 hover:text-green-800">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-green-700 hover:text-green-800 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>For demo purposes, any non-empty email and password will work</p>
        </div>
      </div>
    </div>;
};