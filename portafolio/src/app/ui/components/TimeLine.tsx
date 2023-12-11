import React from 'react';

const TimeLine: React.FC = () => {
  return (
    <>
    <div className='bg-blacky absolute w-3 h-3 rounded-full border border-gray-900'></div>
    <div className='bg-blacky w-1 h-[99rem]'></div>             
    <div className='bg-blacky absolute w-3 h-3 rounded-full border border-gray-900 transform translate-y-[99rem]'></div>
    </>
  )
}

export { TimeLine } 
