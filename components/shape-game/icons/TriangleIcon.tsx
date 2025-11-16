import React from 'react';

const TriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <polygon points="50,0 100,100 0,100" />
  </svg>
);

export default TriangleIcon;
