import Head from 'next/head'

export default function Home() {
  return (
   <div className="bg-pink-300 w-full h-[100vh] flex justify-center items-center" id='stage'>
     <div className='w-[100px] h-[150px]  relative ' id="door">
        <div className='absolute left-0 right-0 top-0 w-full h-full bg-black' id="door-back"></div>
        <img src={'ilbuni_0.png'}  className='w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain  ' id="ilbun"></img>
        <div className='absolute left-0 top-0 w-full h-full bg-red-600/[.7]' id="door-body"></div>
      </div> 
      <div className='w-[100px] h-[150px]  relative ' id="door">
        <div className='absolute left-0 right-0 top-0 w-full h-full bg-black' id="door-back"></div>
        <img src={'ilbuni_1.png'}  className='w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain  ' id="ilbun"></img>
        <div className='absolute left-0 top-0 w-full h-full bg-green-600/[.7]' id="door-body"></div>
      </div> 
      <div className='w-[100px] h-[150px]  relative ' id="door">
        <div className='absolute left-0 right-0 top-0 w-full h-full bg-black' id="door-back"></div>
        <img src={'ilbuni_2.png'}  className='w-24 h-24 bg-no-repeat bg-[50%]-[100%] absolute left-0 bottom-0  bg-contain  ' id="ilbun"></img>
        <div className='absolute left-0 top-0 w-full h-full bg-blue-600/[.7]' id="door-body"></div>
      </div> 
   </div>
  )
}
