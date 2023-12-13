import React from 'react'
import { ptMono } from '../fonts'

interface ButtonProps {
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <>
            <button className={`${ptMono.className} text-whity mobile:text-[0.83rem] bg-blacky p-1 rounded mobile:m-[0.1rem] disabled cursor-default`}>
                {children}
            </button>
        </>
    )
}

export { Button }
