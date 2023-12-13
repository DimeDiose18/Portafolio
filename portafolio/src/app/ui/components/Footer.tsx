import React from 'react'
import { SocialNetworks } from './SocialNetworks'

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#313131] mt-24 border-t-2 border-rosy mobile:w-[99.2vw] mobile:h-20 relative'>
                <div className='flex items-center flex-col mt-4'>
                    <div className='m-1'>
                        <SocialNetworks />
                    </div>
                    <div>
                        <p className='text-white text-sm'>©️ DimeDiose 2023</p>
                    </div>

                </div>

            </footer>
        </div>
    )
}

export { Footer }
