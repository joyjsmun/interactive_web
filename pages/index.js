import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [effect,setEffect] = useState(false);

  console.log(effect);

  return (
   <div className="bg-pink-300 w-full h-[100vh] flex justify-center items-center" id='stage'>
     <div className='w-[100px] h-[150px]  relative' onClick={() => {setEffect(prev => !prev)}}  id="door">
        <div className='absolute left-0 right-0 top-0 w-full h-full bg-black overflow-hidden' id="door-back">
        <img src={'ilbuni_0.png'}  className={`${effect == true ? "w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain translate-x-[100%] " : "w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain translate-x-[0%]"}`}   id="ilbun"/>
        </div>
        <div className={`${effect == true ? 'absolute left-0 top-0 w-full h-full bg-red-600/[.7] ' : 'absolute left-0 top-0 w-full h-full bg-red-600/[.7]  origin-left rotate-[90deg] duration-500'}`}  id="door-body"></div>
      </div> 
      <div className='w-[100px] h-[150px]  relative' onClick={() => {setEffect(prev => !prev)}}  id="door">
        <div className='absolute left-0 right-0 top-0 w-full h-full bg-black overflow-hidden' id="door-back">
        <img src={'ilbuni_0.png'}  className={`${effect == true ? "w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain translate-x-[100%] " : "w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain translate-x-[0%]"}`}   id="ilbun"/>
        </div>
        <div className={`${effect == true ? 'absolute left-0 top-0 w-full h-full bg-green-600/[.7] ' : 'absolute left-0 top-0 w-full h-full bg-green-600/[.7]  origin-left rotate-[90deg] duration-500'}`}  id="door-body"></div>
      </div> 
      <div className='w-[100px] h-[150px]  relative' onClick={() => {setEffect(prev => !prev)}}  id="door">
        <div className='absolute left-0 right-0 top-0 w-full h-full bg-black overflow-hidden' id="door-back">
        <img src={'ilbuni_0.png'}  className={`${effect == true ? "w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain translate-x-[100%] " : "w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain translate-x-[0%]"}`}   id="ilbun"/>
        </div>
        <div className={`${effect == true ? 'absolute left-0 top-0 w-full h-full bg-blue-600/[.7] ' : 'absolute left-0 top-0 w-full h-full bg-blue-600/[.7]  origin-left rotate-[90deg] duration-500'}`}  id="door-body"></div>
      </div> 
    
   </div>
  )
}
