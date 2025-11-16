import React from 'react';

interface TurnLeftIconProps {
  className?: string;
}

const TurnLeftIcon: React.FC<TurnLeftIconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.25.75a.75.75 0 000 1.5h.31l-3.22 3.22a.75.75 0 001.06 1.06l3.22-3.22v.31a.75.75 0 001.5 0V5.25a.75.75 0 00-.75-.75h-2.1z" clipRule="evenodd" />
  </svg>
);

export default TurnLeftIcon;
