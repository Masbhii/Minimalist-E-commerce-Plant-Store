import React, { useEffect, useState, createContext, useContext } from 'react';
interface User {
  id: string;
  name: string;
  email: string;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll accept any non-empty values
    if (email && password) {
      const newUser = {
        id: '1',
        name: 'Demo User',
        email
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to register a new user
    if (name && email && password) {
      const newUser = {
        id: '1',
        name,
        email
      };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  return <AuthContext.Provider value={{
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};