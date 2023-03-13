import { useState } from 'react';
import useSound from 'use-sound';

interface CardProps{
  imageSrc:string;
  imageAlt:string;
  audioSrc:string;
}
export function Card({imageAlt,imageSrc,audioSrc}:CardProps){

  const [vol, setVol] = useState(0.3);
  const [runAudio, setRunAudio] = useState(true);
  
  const [play, { stop }] = useSound(audioSrc, {volume: vol});
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
    <div className="relative flex flex-col items-center justify-center hover:cursor-pointer hover:scale-110 transition-all rounded-lg" >
      <img src={imageSrc} alt={imageAlt} onClick={() => execAudio()}/>
      <input type="range" max="1" min="0" value={vol} step="0.01" defaultValue={0.3} className="bottom-5 w-[60%] absolute border mx-auto" onChange={(e) => setVol(Number(e.target.value))} />
    </div>

   
  )
}