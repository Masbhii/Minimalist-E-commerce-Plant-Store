import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { PackageIcon, HeartIcon, UserIcon, ClockIcon } from 'lucide-react';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { useOrderHistory } from '../context/OrderHistoryContext';
import { OrderDetailModal } from '../components/OrderDetailModal';

export const AccountPage: React.FC = () => {
  const { recentlyViewed } = useRecentlyViewed();
  const { orders, getUserOrders, updateOrderStatus, cancelOrder } = useOrderHistory();
  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();

  const [openOrder, setOpenOrder] = React.useState(null);

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
                <Link to="/wishlist" className="w-full flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <HeartIcon size={18} className="mr-3" />
                  Wishlist
                </Link>
                <Link to="/profile" className="w-full flex items-center px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100">
                  <UserIcon size={18} className="mr-3" />
                  Profile
                </Link>
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
              {getUserOrders(user.id).length === 0 ? (
                <div className="text-center py-8 text-gray-500">No orders yet.</div>
              ) : (
                getUserOrders(user.id).map(order => (
                  <div key={order.id} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4 border-b border-gray-200 flex items-center">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Order #{order.id}</p>
                        <p className="text-sm text-gray-500">
                          Placed on {new Date(order.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    {order.items.map(item => (
                      <div key={item.product.id} className="p-4 flex border-b last:border-b-0 border-gray-100">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {item.product.name}
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                        </div>
                        <div>
                          <Button variant="outline" size="small" onClick={() => setOpenOrder(order)}>
                            View Order
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              )}
              <OrderDetailModal
                order={openOrder}
                open={!!openOrder}
                onClose={() => setOpenOrder(null)}
                onCancel={cancelOrder}
                onNextStatus={updateOrderStatus}
              />
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Recently Viewed
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentlyViewed.slice(0, 2).map((product, idx) => (
                  <div className="flex" key={product.id}>
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                      <p className="mt-1 text-sm text-gray-500">${product.price.toFixed(2)}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <ClockIcon size={14} className="mr-1" />
                        Viewed recently
                      </div>
                    </div>
                  </div>
                ))}
                {recentlyViewed.length === 0 && (
                  <div className="col-span-2 text-gray-400 text-center">No recently viewed products.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};