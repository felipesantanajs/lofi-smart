import { Headphones } from 'phosphor-react'

import { SiTailwindcss, SiNextdotjs, SiVercel, SiReact } from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';
import { Card } from './components/Card';

function App() {
  return (
    <div className='flex flex-col' >
      <nav className='fixed w-full flex items-center justify-center  z-10 backdrop-filter backdrop-blur-sm bg-opacity-5 border-b border-slate-200/10 py-6 px-6'>
        <div className='w-full flex justify-between items-center gap-4'>
          <div className='flex items-center gap-4'>
            <Headphones size="32" className='' />
            <h1 className='animate-pulse font-bold text-2xl'> lofi.smart </h1>
          </div>
          <img src="./assets/images/logo/fs-logo-white.svg" alt="Felipe Santana" width={30} height={30} className='bg-transparent '/>
        </div>
      </nav>
      <header className='flex justify-center items-center  py-32 px-5 md:text-6xl'>
        <h1 className='flex gap-3 font-bold opacity: 1; transform: none;'>
          <span className='
            animate-gradient-1 
            bg-gradient-to-r 
            from-purple-500
            via-white
            to-pink-500
            bg-clip-text 
            text-transparent 
            md:text-4xl
            lg:text-5xl 
            font-black'>
            Relax. Chill. & Code.
          </span>
        </h1>
      </header>
      <main className='mx-auto'>
        <section className=' grid gap-20 place-content-center md:grid-cols-2 lg:grid-cols-3'>
          <Card imageSrc='./assets/images/chill-cover.svg'  imageAlt='Chill Card Lofi' audioSrc="./assets/ambient-sounds/highway.mp3"/>
          <Card imageSrc='./assets/images/forest-cover.svg' imageAlt='Forest Card Lofi' audioSrc="./assets/ambient-sounds/forest.mp3" />
          <Card imageSrc='./assets/images/library-cover.svg' imageAlt='Library Card Lofi' audioSrc="./assets/ambient-sounds/campfire.mp3" />
          <Card imageSrc='./assets/images/meditate-cover.svg' imageAlt='Meditate Card Lofi' audioSrc="./assets/ambient-sounds/wind.mp3" />
          <Card imageSrc='./assets/images/ocean-cover.svg' imageAlt='Ocean Card Lofi' audioSrc="./assets/ambient-sounds/rain.mp3"/>
          <Card imageSrc='./assets/images/rain-cover.svg' imageAlt='Rain Card Lofi' audioSrc="./assets/ambient-sounds/rain.mp3"/>
          <Card imageSrc='./assets/images/night-cover.svg' imageAlt='Night Card Lofi' audioSrc="./assets/ambient-sounds/crime-scene.mp3"/>
          <Card imageSrc='./assets/images/study-cover.svg' imageAlt='Study Card Lofi' audioSrc="./assets/ambient-sounds/waves.mp3"/>
          <Card imageSrc='./assets/images/urban-cover.svg' imageAlt='Urban Card Lofi' audioSrc="./assets/ambient-sounds/construction.mp3"/>
        </section>
      </main>
      <footer className='flex justify-center items-center text-sm gap-4 py-10'>
        <div className='flex items-center justify-center gap-1'>
          <p>Build with</p>
          <SiReact width={50} height={50} className='text-cyan-500' />
          <SiNextdotjs width={50} height={50} />
          <SiTailwindcss width={50} height={50} className='text-cyan-500' />
          <SiVercel width={50} height={50} className='text-black-700' />
        </div>
        <div className='flex items-center justify-center gap-1'>
          <p>& </p>
          <AiFillHeart width={50} height={50} className='text-red-700' />
          <p><img src="./assets/images/logo/fs-logo-white.svg" alt="Felipe Santana" width={12} height={12} className='bg-transparent'/></p>
        </div>
      </footer>
    </div>
  )
}

export default App
