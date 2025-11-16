import React from 'react';

interface GoUpIconProps {
  className?: string;
}

const GoUpIcon: React.FC<GoUpIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 9.31l-3.22 3.22a.75.75 0 01-1.06-1.06l3.75-3.75z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 4.5a.75.75 0 01.75.75v8.25a.75.75 0 01-1.5 0V5.25A.75.75 0 0112 4.5z" clipRule="evenodd" />
  </svg>
);

export default GoUpIcon;