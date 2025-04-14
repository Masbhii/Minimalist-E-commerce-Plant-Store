import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500';
  const variantClasses = {
    primary: 'bg-green-700 text-white hover:bg-green-800 border border-transparent',
    secondary: 'bg-green-100 text-green-800 hover:bg-green-200 border border-transparent',
    outline: 'bg-transparent text-green-700 hover:bg-green-50 border border-green-700'
  };
  const sizeClasses = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass}`;
  return <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>;
};