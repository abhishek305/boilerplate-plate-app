import React from 'react';

// Basic Input component
// Props:
// - value: string
// - onChange: function
// - placeholder: string
// - className: string (will be appended to default 'custom-input')
export const Input = ({ value, onChange, placeholder, className = '' }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`custom-input ${className}`}
    />
  );
};