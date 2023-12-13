'use client'
import React from 'react'
import { ibmPlexMono } from '../fonts'
import { User } from '../icons/User'
import { Pen } from '../icons/Pen'
import { Message } from '../icons/Message'
import { useFormStore } from '@/store/storeForm'

const Form = () => {
    const { name, email, message, errors, setName, setEmail, setMessage } = useFormStore();

    const handleNameChange = (e: any) => setName(e.target.value);
    const handleEmailChange = (e: any) => setEmail(e.target.value);
    const handleMessageChange = (e: any) => setMessage(e.target.value);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (errors.name || errors.email || errors.message) {
            console.log('Formulario no valido perro');
            return
        }

        const dataSend = { name: name, email: email, message: message };
        console.log(dataSend);
        
    }

    return (
        <>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center z-2">
                    <div className="md:w-1/3">
                        <label className={`${ibmPlexMono.className} block text-md text-blacky md:text-right mb-1 md:mb-0 pr-4`} htmlFor="inline-full-name">
                            Name
                        </label>
                    </div>
                    <div className="md:w-2/3 relative">
                        <input className={`${ibmPlexMono.className} indent-[1.2rem] border-box bg-baby-blue appearance-none border-2 shadow-inner border-blacky rounded-lg w-full py-2 px-4 text-whity leading-tight focus:outline-none focus:bg-baby-blue focus:border-blacky placeholder:text-whity placeholder:text-md text-md`} id="inline-full-name" type="text" placeholder='Enter your name' onChange={handleNameChange} value={name} />
                        <User />
                    </div>
                </div>
                <div className='h-7'>
                    {errors.name && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.name}</span>}
                </div>

                <div className="md:flex md:items-center z-2">
                    <div className="md:w-1/3">
                        <label className={`${ibmPlexMono.className} block text-md text-blacky md:text-right mb-1 md:mb-0 pr-4`} htmlFor="inline-full-name" >
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3 relative">
                        <input className={`${ibmPlexMono.className} indent-[1.2rem] bg-baby-blue appearance-none border-2 shadow-inner border-blacky rounded-lg w-full py-2 px-4 text-whity leading-tight focus:outline-none focus:bg-baby-blue focus:border-blacky placeholder:text-whity placeholder:text-md text-md`} id="inline-password" type="text" placeholder="Enter your email" onChange={(e) => handleEmailChange(e)} value={email} />
                        <Pen />
                    </div>
                </div>
                <div className='h-7'>
                    {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</span>}
                </div>
                <div className="md:flex md:items-center z-2">
                    <div className="md:w-1/3">
                        <label className={`${ibmPlexMono.className} block text-md text-blacky md:text-right mb-1 md:mb-0 pr-4`} htmlFor="inline-full-name" >
                            Message
                        </label>
                    </div>
                    <div className="md:w-2/3 relative">
                        <textarea className={`${ibmPlexMono.className} indent-[1.2rem] h-36 bg-baby-blue appearance-none border-2 shadow-inner border-blacky rounded-lg w-full py-2 px-4 text-whity leading-tight focus:outline-none focus:bg-baby-blue focus:border-blacky placeholder:text-whity placeholder:text-md text-md`} id="inline-password" placeholder="Enter your message" onChange={handleMessageChange} value={message} />
                        <Message />
                    </div>
                </div>
                <div className='h-7'>
                    {errors.message && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.message}</span>}
                </div>
                <div className="flex justify-end md:w-2/3">
                    <button className={`${ibmPlexMono.className} shadow-inner bg-baby-blue hover:bg-[#0dc2e2] focus:shadow-outline focus:outline-none text-white font-bold py-1 px-5 rounded border-2  border-blacky font-outline-3`} type="submit">
                        Send
                    </button>
                </div>


            </form>
        </>
    )
}

export { Form }