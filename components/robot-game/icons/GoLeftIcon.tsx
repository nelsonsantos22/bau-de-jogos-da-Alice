import React from 'react';

interface GoLeftIconProps {
  className?: string;
}

const GoLeftIcon: React.FC<GoLeftIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M7.72 11.47a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 1.06L9.31 12l3.22 3.22a.75.75 0 11-1.06 1.06l-3.75-3.75z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M4.5 12a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
);

export default GoLeftIcon;