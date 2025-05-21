import React from 'react';

// Basic Card component
// Props:
// - className: string (styles applied to the card div)
// - children: ReactNode
// - onClick: function (optional)
export const Card = ({ children, className = '', onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};