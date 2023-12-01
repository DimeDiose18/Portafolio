import React from 'react'
import { ibmPlexMono } from '../fonts';

const ButtonContact: React.FC = () => {
  return (
    <>
    <button className={`${ibmPlexMono.className} shadow-inner w-[50%] bg-sky border-2 border-blacky rounded-md mobile:w-32 mobile:h-[1.875rem] mobile:text-md font-outline-3 text-sky`}>
        Contact to me
    </button>
      
    </>
  )
}

export { ButtonContact };
