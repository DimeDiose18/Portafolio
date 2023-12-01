import { ButtonContact } from './ui/components/ButtonContact';
import { SocialNetworks } from './ui/components/SocialNetworks';
import { Title } from './ui/components/Title';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center mobile:p-10 p-14'>
      <section>
      <Title />
      </section>
      <section className='flex gap-5 justify-between w-[100%] m-[3.25rem]'>
        <SocialNetworks />
        <ButtonContact />
      </section>
      
    </main>
  )
}

