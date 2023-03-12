import { Headphones } from 'phosphor-react'

import { SiTailwindcss, SiNextdotjs, SiVercel, SiReact } from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';


function App() {
  return (
    <div className='flex flex-col items-center max-w-[1440px] lg:max-w-full ' >
      <nav className='fixed w-full flex items-center justify-center  z-10 backdrop-filter backdrop-blur-sm bg-opacity-5 border-b border-slate-500/10 p-5'>
        <div className='flex items-center gap-4'>
          <Headphones size="32" className='' />
          <h1 className='font-bold text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600'> lofi.smart </h1>
        </div>
      </nav>
      <header className='flex justify-center items-center  py-32 px-5 md:text-6xl'>
        <h1 className='flex gap-3 font-bold text-5xl'>
          <span>Relax.</span>
          <span>Chill.</span>
          <span>Code.</span>
        </h1>
      </header>
      <main className='mx-auto'>
        <section className=' grid grid-cols-2 gap-20 place-content-center lg:grid-cols-3'>
          <div>
            <img src="./assets/images/chill-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/forest-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/library-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/meditate-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/night-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/ocean-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/rain-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/study-cover.svg" alt="lofi" />
          </div>
          <div>
            <img src="./assets/images/urban-cover.svg" alt="lofi" />
          </div>

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
          <p>by FS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
