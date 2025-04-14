import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
export const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    signup
  } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    try {
      const success = await signup(name, email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Failed to create account');
      }
    } catch (err) {
      setError('An error occurred during signup');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="w-full bg-white">
      <div className="max-w-md mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-gray-900">Create Account</h1>
          <p className="mt-2 text-gray-600">
            Join our community of plant lovers
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          {error && <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500" required />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-green-500 focus:border-green-500" required />
            </div>
            <Button type="submit" fullWidth disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-green-700 hover:text-green-800 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          <p>For demo purposes, any valid input will create an account</p>
        </div>
      </div>
    </div>;
};