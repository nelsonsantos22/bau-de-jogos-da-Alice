import React from 'react';

interface GoDownIconProps {
  className?: string;
}

const GoDownIcon: React.FC<GoDownIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 011.06-1.06L12 14.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 19.5a.75.75 0 01-.75-.75V10.5a.75.75 0 011.5 0v8.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

export default GoDownIcon;