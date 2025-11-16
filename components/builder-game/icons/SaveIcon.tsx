import React from 'react';

const SaveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.406 3.75 3.75 0 00-5.83-4.353A6.004 6.004 0 0010.5 3.75zM12 13.5a.75.75 0 01.75.75v2.25H15a.75.75 0 010 1.5h-2.25V20a.75.75 0 01-1.5 0v-2.25H9a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);

export default SaveIcon;
