import React from 'react';

const CircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <circle cx="50" cy="50" r="50" />
  </svg>
);

export default CircleIcon;
