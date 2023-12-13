import React from 'react';
import { SVGProps } from '@/app/lib/types/SvgTypes';

const Message: React.FC<SVGProps> = ({ width = 24, height = 24, fill = 'rgba(0, 0, 0, 0.83)' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className='input-icon-2'
      viewBox="0 0 24 24"
      style={{ fill, transform: '' }}
    >
      <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"></path>
    </svg>
  );
};

export { Message };
