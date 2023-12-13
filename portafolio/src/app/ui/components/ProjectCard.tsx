import Image from 'next/image'
import React from 'react'
import { ArrowLink } from '../icons/ArrowLink'
import { prompt } from '../fonts'
import { ProjectsTypes } from '../../lib/types/ProjectsTypes'
import { Button } from './Button'


const ProjectCard: React.FC<ProjectsTypes> = ({ image, title, alt, myBg, link, top, tags }) => {
    
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
              {tags.map((element, index) => (
                <Button key={index}>{element}</Button>
              ))}
            </div>
        </div>
    )
}

export { ProjectCard }
