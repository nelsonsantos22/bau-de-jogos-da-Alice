import React from 'react';

interface RefreshIconProps {
  className?: string;
}

const RefreshIcon: React.FC<RefreshIconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
    >
        <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-4.5a.75.75 0 000 1.5h6a.75.75 0 00.75-.75V4.5a.75.75 0 00-1.5 0v2.253a9 9 0 00-15.06 4.042.75.75 0 001.5.059zm14.495 3.891a.75.75 0 00-1.5-.059a7.5 7.5 0 01-12.548 3.364l-1.903-1.903h4.5a.75.75 0 000-1.5h-6a.75.75 0 00-.75.75v6a.75.75 0 001.5 0v-2.253a9 9 0 0015.06-4.042z" clipRule="evenodd" />
    </svg>
);

export default RefreshIcon;