import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { PackageIcon, HeartIcon, UserIcon, ClockIcon } from 'lucide-react';
export const AccountPage: React.FC = () => {
  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{
      from: {
        pathname: '/account'
      }
    }} />;
  }
  return <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">My Account</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <UserIcon size={24} className="text-green-700" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-medium text-gray-900">
                    {user?.name}
                  </h2>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>
              <nav className="space-y-2">
                <button className="w-full flex items-center px-3 py-2 text-sm rounded-md bg-green-100 text-green-800">
                  <PackageIcon size={18} className="mr-3" />
                  Orders
                </button>
                <button className="w-full flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <HeartIcon size={18} className="mr-3" />
                  Wishlist
                </button>
                <button className="w-full flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <UserIcon size={18} className="mr-3" />
                  Profile
                </button>
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Button variant="outline" fullWidth onClick={logout}>
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order History
              </h2>
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex items-center">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Order #12345</p>
                    <p className="text-sm text-gray-500">
                      Placed on May 15, 2023
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </div>
                </div>
                <div className="p-4 flex">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Peace Lily" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      Peace Lily
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">$24.99 x 1</p>
                  </div>
                  <div>
                    <Button variant="outline" size="small">
                      View Order
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 border border-gray-200 rounded-md overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex items-center">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Order #12346</p>
                    <p className="text-sm text-gray-500">
                      Placed on April 28, 2023
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Delivered
                    </span>
                  </div>
                </div>
                <div className="p-4 flex">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Monstera Deliciosa" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      Monstera Deliciosa
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">$39.99 x 1</p>
                  </div>
                  <div>
                    <Button variant="outline" size="small">
                      View Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Recently Viewed
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1606248895016-de5be8a2c94d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Fiddle Leaf Fig" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      Fiddle Leaf Fig
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">$49.99</p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <ClockIcon size={14} className="mr-1" />
                      Viewed 2 hours ago
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Fresh Roses Bouquet" className="h-full w-full object-cover object-center" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      Fresh Roses Bouquet
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">$34.99</p>
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <ClockIcon size={14} className="mr-1" />
                      Viewed yesterday
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};