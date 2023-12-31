import React from 'react';
import { SVGProps } from '../../lib/types/SvgTypes';

const ArrowLink: React.FC<SVGProps> = ({ width = 24, height = 24, fill = '#1E1E1E' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill, transform: 'rotate(45deg)', msFilter: '' }}
    >
      <path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"></path>
    </svg>
  );
};

export { ArrowLink };
