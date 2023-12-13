import { AboutMe } from './ui/components/AboutMe';
import { ButtonContact } from './ui/components/ButtonContact';
import { Footer } from './ui/components/Footer';
import { Form } from './ui/components/Form';
import { Projects } from './ui/components/Projects';
import Skills from './ui/components/Skills';
import { SocialNetworks } from './ui/components/SocialNetworks';
import { Title } from './ui/components/Title';
import { ibmPlexMono } from './ui/fonts';
import { Arrow } from './ui/icons/Arrow';
import { Circle } from './ui/icons/Circle';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center mobile:px-10 mobile:pt-10 pt-10 px-14'>
      <section id='titles'>
        <Title />
      </section>
      <section id='social-networks' className='flex gap-4 justify-between mobile:w-[100%] m-[3.25rem]'>
        <SocialNetworks />
        <ButtonContact />
      </section>
      <section id='aboutMe-arrow'>
        <AboutMe />
        <div className='flex justify-center my-7'>
          <Arrow />
        </div>
      </section>
      <section id='titles-skills'>
        <div>
          <h1 className={`${ibmPlexMono.className} mobile:text-xl text-whity outline-4 font-outline-3 tracking-wide`}>LANGUAGES AND TOOLS</h1>
          <div className='transform translate-x-[14.9rem] translate-y-[-0.90rem]'>
            <Circle fill='#22FD81' />
          </div>
        </div>
      </section>
      <section id='skills' className='grid justify-items-center mobile:grid-cols-3 grid-cols-4 mobile:gap-4 mobile:w-[100%] mt-[1.75rem] '>
        <Skills />
      </section>
      <section id='arrow-titles-projects'>
        <div className='flex justify-center my-7'>
          <Arrow />
        </div>
        <div className='mb-3'>
          <h1 className={`${ibmPlexMono.className} mobile:text-xl text-whity outline-4 font-outline-3 tracking-wide`}>PROJECTS</h1>
          <div className='transform translate-x-[6.2rem] translate-y-[-0.90rem]'>
            <Circle fill='#FF9D5A' />
          </div>
        </div>
      </section>
      <section id='projects' className='w-[100%]'>
        <Projects />
      </section>
      <section id='arrow-titles-contact'>
        <div className='flex justify-center my-14'>
          <Arrow />
        </div>
        <div className='mb-3'>
          <h1 className={`${ibmPlexMono.className} mobile:text-xl text-whity outline-4 font-outline-3 tracking-wide`}>Send me a message!</h1>
          <div className='transform translate-x-[14rem] translate-y-[-0.90rem]'>
            <Circle fill='#FC5A88' />
          </div>
        </div>
      </section>
      <section id='contact'>
        <Form />
      </section>
      <section id='footer'>
        <Footer />
      </section>

    </main>
  )
}

