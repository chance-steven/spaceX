import React from 'react'
import SemiFalcon9 from '../components/SemiFalcon9'

const Falcon9 = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/images/falcon-9.webp')] bg-cover h-screen text-white flex flex-col justify-center items-center">
         <h1 className='font-extrabold text-3xl'>FALCON 9</h1>
         <p>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</p>
      </div>
      <SemiFalcon9 />
    </>
    
  )
}

export default Falcon9