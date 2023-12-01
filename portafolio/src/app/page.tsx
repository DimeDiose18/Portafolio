import { AboutMe } from './ui/components/AboutMe';
import { ButtonContact } from './ui/components/ButtonContact';
import { SocialNetworks } from './ui/components/SocialNetworks';
import { Title } from './ui/components/Title';
import { ibmPlexMono } from './ui/fonts';
import { Arrow } from './ui/icons/Arrow';
import { Circle } from './ui/icons/Circle';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center mobile:p-10 p-14'>
      <section>
      <Title />
      </section>
      <section className='flex gap-5 justify-between mobile:w-[18.75rem] m-[3.25rem]'>
        <SocialNetworks />
        <ButtonContact />
      </section>
      <section>
        <AboutMe />
        <div className='flex justify-center my-7'>
          <Arrow />
        </div>
      </section>
      <div>
      <h1 className={`${ibmPlexMono.className} mobile:text-xl text-whity outline-4 font-outline-3 tracking-wide`}>LANGUAGES AND TOOLS</h1>
      <div className='transform translate-x-[14.9rem] translate-y-[-0.90rem]'>
        <Circle />
      </div>
      
      </div>
      
    </main>
  )
}

