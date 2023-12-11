import React from 'react'
import { TimeLine } from './TimeLine'
import { ProjectsTypes } from '../../lib/types/ProjectsTypes'
import { ProjectCard } from './ProjectCard'

const Projects: React.FC = () => {

    const myProjects: Array<ProjectsTypes> = [
        {
            image: '/assets/ecommercepage.png',
            title: 'Violett Store',
            alt: 'E-commerce Violett',
            myBg: '#FD68C4',
            link: '#'
        },
        {
            image: '/assets/Rickandmortypage.png',
            title: 'Rick and Morty',
            alt: 'App rick and morty',
            myBg: 'yellow',
            link: '#'
        },
        {
            image: '/assets/javaquizpage.png',
            title: 'Javascript Quizz',
            alt: 'A little quizz',
            myBg: 'orange',
            link: '#'
        },
        {
            image: '/assets/pokemonpage.png',
            title: 'Pokedex',
            alt: 'Pokemon web app',
            myBg: '#BE87F9',
            link: '#'
        },
        {
            image: '/assets/page.png',
            title: 'HealTech',
            alt: 'Healtech web app',
            myBg: '#22FD81',
            link: '#'
        },
    ]

    const topValues = ['3.7rem', '23.2rem', '42.5rem', '64.3rem', '83.8rem']

    const projectCards = myProjects.map(({image, title, alt, myBg, link}, index) => (
        <ProjectCard
        key={title.toLocaleLowerCase()}
        image={image}
        title={title}
        alt={alt}
        myBg={myBg}
        link={link}
        top={topValues[index] || '0rem'} 
    />
    ))
    
    return (
        <div className='relative'>
            <div className='flex justify-center'>
                {projectCards}
            </div>
            <div className='flex justify-center relative -z-10 mt-5'>
                <TimeLine />
            </div>
        </div>
    );
};

export { Projects };