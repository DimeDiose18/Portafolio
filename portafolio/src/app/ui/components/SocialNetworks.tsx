import React from 'react'
import { Git } from '../icons/Git'
import { LinkedIn } from '../icons/LinkedIn'
import { Phone } from '../icons/Phone'

const SocialNetworks: React.FC = () => {
  return (
    <div className='flex flex-row justify-between w-[50%]'>
      <div>
        <Git />
      </div>
      <div>
        <LinkedIn />
      </div>
      <div>
        <Phone />
      </div>
    </div>
  )
}

export { SocialNetworks }
