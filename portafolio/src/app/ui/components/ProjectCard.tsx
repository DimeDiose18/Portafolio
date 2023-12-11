import Image from 'next/image'
import React from 'react'
import { ArrowLink } from '../icons/ArrowLink'
import { prompt } from '../fonts'
import { ProjectsTypes } from '../../lib/types/ProjectsTypes'


const ProjectCard: React.FC<ProjectsTypes> = ({ image, title, alt, myBg, link, top }) => {
    
    return (
        <div className='flex flex-col items-center border-2 border-blacky border-b-4 border-r-4 rounded-md shadow absolute' style={{ top: `${top}`, backgroundColor: `${myBg}`}}>
            <div className='p-2 flex items-center'>
                <p className={`${prompt.className} text-blacky text-b`}>{title}</p>
                <a href={link} target='_blank'>
                    <ArrowLink />
                </a>
            </div>
            <Image width={400} height={400} className='rounded-sm p-2' key={title} src={image} alt={alt} />
            <div className='p-3'>
                <p className='font-normal text-gray-700 '>E-commerce</p>
            </div>
        </div>
    )
}

export { ProjectCard }
