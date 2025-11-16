import React from 'react';

const SquareIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <rect width="100" height="100" />
  </svg>
);

export default SquareIcon;
