import React from 'react';

const SoundOnIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06zM18.584 5.416a.75.75 0 00-1.06 1.06 7.5 7.5 0 010 10.608a.75.75 0 101.06 1.06 9 9 0 000-12.728z" />
    <path d="M16.082 7.918a.75.75 0 00-1.061 1.06 4.5 4.5 0 010 6.364.75.75 0 101.06 1.06 6 6 0 000-8.484z" />
  </svg>
);

export default SoundOnIcon;
