import React from 'react';
import { SVGProps } from '@/app/lib/types/SvgTypes';

const Arrow: React.FC<SVGProps> = ({ width=35, height=35 , fill = 'rgba(30, 30, 30, 1)' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill, transform: '', msFilter: '' }}
    >
      <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
    </svg>
  );
};

export { Arrow };
