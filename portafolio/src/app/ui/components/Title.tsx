import React from 'react'
import { meowScript, ibmPlexMono } from '../fonts'

const Title: React.FC = () => {
  return (
    <div>
        <div>
        <h2 className={`${meowScript.className} mobile:text-3xl text-rosy outline-4 font-outline`}>Hi, my name is</h2>
      </div>
      <div>
        <h1 className={`${ibmPlexMono.className} mobile:text-5xl text-whity outline-4 font-outline-2 tracking-wide`}>Dioselyn Lemus</h1>
      </div>
      <div>
        <h2 className={`${ibmPlexMono.className} mobile:text-b text-gray`}>Full Stack Developer</h2>
      </div>
    </div>
  )
}

export { Title } 