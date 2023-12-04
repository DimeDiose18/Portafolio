import React from 'react';
import { SVGProps } from '../../lib/types/SvgTypes';

const Circle: React.FC<SVGProps> = ({width=10, height=10, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill, transform: '', msFilter: '' }}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
    </svg>
  );
};

export { Circle };
