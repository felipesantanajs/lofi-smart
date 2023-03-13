import { useState } from 'react';
import useSound from 'use-sound';

interface CardProps{
  imageSrc:string;
  imageAlt:string;
  audioSrc:string;
}
export function Card({imageAlt,imageSrc,audioSrc}:CardProps){

  const [runAudio, setRunAudio] = useState(true)
  
  const [play, { stop }] = useSound(audioSrc);
  function execAudio(){ 
    if (runAudio) {
      play(); 
      setRunAudio(!runAudio)
    }
    else{
      stop()
      setRunAudio(!runAudio)
    }
    
  }
  
  return (
    <div className="relative flex flex-col items-center justify-center hover:cursor-pointer hover:scale-110 transition-all rounded-lg" onClick={() => execAudio()}>
      <img src={imageSrc} alt={imageAlt}/>
      <input type="range" max="100" min="0" className="bottom-5 w-[60%] absolute border mx-auto"/>
    </div>

   
  )
}