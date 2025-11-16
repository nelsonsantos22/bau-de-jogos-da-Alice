import React from 'react';

interface GoRightIconProps {
  className?: string;
}

const GoRightIcon: React.FC<GoRightIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M16.28 12.53a.75.75 0 010-1.06l-3.75-3.75a.75.75 0 01-1.06 1.06L14.69 12l-3.22 3.22a.75.75 0 111.06 1.06l3.75-3.75z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M19.5 12a.75.75 0 01-.75.75H10.5a.75.75 0 010-1.5h8.25a.75.75 0 01.75.75z" clipRule="evenodd" />
  </svg>
);

export default GoRightIcon;