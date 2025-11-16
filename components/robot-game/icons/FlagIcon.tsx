import React from 'react';

interface FlagIconProps {
  className?: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M3 3a.75.75 0 01.75.75v.518a3 3 0 013.532-1.454c.54.195 1.114.333 1.718.422A4.502 4.502 0 0112 4.5c1.17 0 2.252.424 3 1.145A4.502 4.502 0 0118 4.5c.34 0 .673.04 1 .118v-1.14a.75.75 0 011.5 0v1.14A2.25 2.25 0 0122.5 6.75v10.5a.75.75 0 01-1.5 0v-1.14a4.502 4.502 0 01-3-1.145c-.748-.72-1.83-1.145-3-1.145a4.502 4.502 0 00-2.282.608 3 3 0 00-3.436-1.454A3.001 3.001 0 006 13.682v5.568a.75.75 0 01-1.5 0V3.75A.75.75 0 013 3z"
      clipRule="evenodd"
    />
  </svg>
);

export default FlagIcon;
