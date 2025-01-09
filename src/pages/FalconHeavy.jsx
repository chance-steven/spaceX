import React from 'react'
import SemiFalcon9 from '../components/SemiFalcon9'

const FalconHeavy = () => {
  return (
    <>
   <div className="bg-[url('/src/assets/images/falcon-heavy.webp')] bg-cover h-screen flex flex-col justify-center items-center text-white">
       <h1 className='text-3xl font-extrabold'>FALCON HEAVY</h1>
       <p>THE WORLD'S MOST POWERFUL ROCKET</p>
    </div>
    <SemiFalcon9 />
    </>
 
  )
}

export default FalconHeavy