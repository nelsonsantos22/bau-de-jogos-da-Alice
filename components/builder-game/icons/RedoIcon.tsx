import React from 'react';

const RedoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L19.19 9.75H9a6.75 6.75 0 000 13.5h3a.75.75 0 010 1.5H9a5.25 5.25 0 110-10.5h10.19l-4.72-4.72a.75.75 0 010-1.06z" clipRule="evenodd" />
  </svg>
);

export default RedoIcon;
