import React from 'react';

// Basic CardContent component
// Props:
// - className: string (styles applied to the content div)
// - children: ReactNode
export const CardContent = ({ children, className = '' }) => {
  // The padding is applied directly in user-card and details-card via CSS
  // So this component might just render children or apply other specific content styles if needed.
  return <div className={className}>{children}</div>;
};