import React from 'react';

interface RobotIconProps {
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const RobotIcon: React.FC<RobotIconProps> = ({ className, direction = 'up' }) => {
  const rotationClasses = {
    up: 'rotate-0',
    right: 'rotate-90',
    down: 'rotate-180',
    left: '-rotate-90',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className} ${rotationClasses[direction]} transition-transform duration-300`}
    >
        <path d="M16 8.5a.5.5 0 00.5-.5V6.5a.5.5 0 00-1 0v1.5a.5.5 0 00.5.5zM19 10a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1h6v1zm-7-2a.5.5 0 00.5-.5V6.5a.5.5 0 00-1 0v1.5a.5.5 0 00.5.5z" />
        <path fillRule="evenodd" d="M12 2a4 4 0 00-4 4v.516A4.5 4.5 0 004.5 11H4a1 1 0 00-1 1v1.5a.5.5 0 00.5.5h1.5a.5.5 0 00.5-.5V12a1 1 0 00-1-1h-.5a3.5 3.5 0 013.5-3.5h5A3.5 3.5 0 0116.5 12H16a1 1 0 00-1 1v1.5a.5.5 0 00.5.5H17a.5.5 0 00.5-.5V12a1 1 0 00-1-1h-.5a4.5 4.5 0 00-3.5-4.484V6a4 4 0 00-4-4zm-1 14a1 1 0 10-2 0v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 18.586V16z" clipRule="evenodd" />
    </svg>
  );
};

export default RobotIcon;
