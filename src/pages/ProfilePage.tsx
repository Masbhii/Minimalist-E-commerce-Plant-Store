import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/Button';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
export const ProfilePage: React.FC = () => {
  const {
    user
  } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    notifications: true
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user profile
    setIsEditing(false);
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-serif text-gray-900">My Profile</h1>
            <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              {isEditing ? <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="mt-1 relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input type="text" value={formData.name} onChange={e => setFormData({
                      ...formData,
                      name: e.target.value
                    })} className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <div className="mt-1 relative">
                        <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input type="email" value={formData.email} onChange={e => setFormData({
                      ...formData,
                      email: e.target.value
                    })} className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <div className="mt-1 relative">
                        <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input type="tel" value={formData.phone} onChange={e => setFormData({
                      ...formData,
                      phone: e.target.value
                    })} className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <div className="mt-1 relative">
                        <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input type="text" value={formData.address} onChange={e => setFormData({
                      ...formData,
                      address: e.target.value
                    })} className="pl-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input type="text" value={formData.city} onChange={e => setFormData({
                      ...formData,
                      city: e.target.value
                    })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          State
                        </label>
                        <input type="text" value={formData.state} onChange={e => setFormData({
                      ...formData,
                      state: e.target.value
                    })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        ZIP Code
                      </label>
                      <input type="text" value={formData.zipCode} onChange={e => setFormData({
                    ...formData,
                    zipCode: e.target.value
                  })} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500" />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" checked={formData.notifications} onChange={e => setFormData({
                    ...formData,
                    notifications: e.target.checked
                  })} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                      <label className="ml-2 block text-sm text-gray-700">
                        Receive email notifications about orders and promotions
                      </label>
                    </div>
                    <div className="flex justify-end">
                      <Button type="submit">Save Changes</Button>
                    </div>
                  </div>
                </form> : <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Personal Information
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-4">
                      <div className="flex items-center">
                        <UserIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-900">{formData.name}</span>
                      </div>
                      <div className="flex items-center">
                        <MailIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-900">{formData.email}</span>
                      </div>
                      <div className="flex items-center">
                        <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-900">
                          {formData.phone || 'Not provided'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Shipping Address
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-4">
                      <div className="flex items-start">
                        <MapPinIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                        <div>
                          <p className="text-gray-900">
                            {formData.address || 'No address provided'}
                          </p>
                          {formData.address && <p className="text-gray-900">
                              {formData.city}, {formData.state}{' '}
                              {formData.zipCode}
                            </p>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Preferences
                    </h3>
                    <div className="mt-4">
                      <p className="text-gray-900">
                        Email notifications:{' '}
                        {formData.notifications ? 'Enabled' : 'Disabled'}
                      </p>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};