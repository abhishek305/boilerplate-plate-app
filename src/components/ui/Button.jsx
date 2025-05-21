import React from 'react';

// Basic Button component
// Props:
// - onClick: function
// - className: string (will be appended to default 'custom-button')
// - variant: string (not used in this basic version, but kept for compatibility)
// - children: ReactNode
export const Button = ({ children, onClick, className = '', variant = 'default' }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {children}
    </button>
  );
};