import React from 'react';

const StarShapeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <polygon points="50,0 61.2,35.2 98.2,35.2 68.5,57 79.7,92.2 50,70 20.3,92.2 31.5,57 1.8,35.2 38.8,35.2" />
  </svg>
);

export default StarShapeIcon;
