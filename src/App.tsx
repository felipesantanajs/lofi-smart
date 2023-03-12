import {Headphones} from 'phosphor-react'
import ImgTailwind from './assets/tailwindcss.png'
import { SiTailwindcss, SiNextdotjs, SiVercel, SiReact } from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';


function App() {
  return (
    <div className=" mx-auto">
      <nav className='w-full top-0 fixed z-10 backdrop-filter backdrop-blur-sm bg-opacity-5 border-b border-slate-500/10 p-5'>
        <div className='flex items-center gap-4'>
          <Headphones size="32" className=''/>
          <h1 className='font-bold text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600'> lofi.smart </h1>
        </div>
      </nav>

      <header className='w-full mx-auto flex gap-1 font-bold justify-center items-center text-5xl py-32'>
        <h1>
          <span>Relax.</span>
          <span>Chill.</span>
          <span>Code.</span>
        </h1>  
      </header>

      <main>
        <section className='grid grid-cols-1 lg:grid-cols-3'>
          <div>
            <img src="/assets/images/chill-cover.svg" alt="lofi" />
          </div>
        </section>
      </main>
      <footer className='flex justify-center items-center text-sm gap-3'>
        <div className='flex gap-1'>
          <p>Build with</p>
          <SiReact className='text-cyan-500'/>
          <SiNextdotjs />
          <SiTailwindcss className='text-cyan-500'/>
          <SiVercel className='text-black-700'/>
        </div>
        <div className='flex gap-1'>
          <p>& </p>
          <AiFillHeart className='text-red-700'/>
        </div>
      </footer>
    </div>
  )
}

export default App
