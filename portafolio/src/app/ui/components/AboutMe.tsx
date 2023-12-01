import React from 'react'
import { ptMono } from '../fonts'

const AboutMe = () => {
  return (
    <div className='flex text-center items-center p-3 bg-lilac box-border border-2 border-b-8 border-r-8 border-blacky rounded-xl shadow-inner shadow-black  h-auto'>
      <p className={`${ptMono.className} text-whity text-md`}>I like to do creative and interactive things with code. My ability to work as a team is combined with an innate passion for continuous improvement and constant learning.</p>
    </div>
  )
}

export { AboutMe }
