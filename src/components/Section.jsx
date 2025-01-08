import Hero from "./Hero"
import Master from "./Master"
import SemiHero from "./SemiHero"
import SemiMaster from "./SemiMaster"
import SemiSetionF from "./SemiSetionF"


const Section = () => {
  return (
    <>
     <nav className="bg-[url('/src/assets/images/section-a.webp')] bg-cover h-screen w-full flex flex-col justify-end pb-40 pl-20">
  
  <div className="text-white relative">
    <p className='text-sm mb-3'>UPCOMING LAUNCH</p>
    <h1 className='text-xl mb-3'>CRS-25 MISSION</h1>
    <button className='border-2 border-white py-2 px-4'>REWATCH</button>
    </div>
  
  </nav> 
  <Hero />
  <SemiHero />
  <Master />
  <SemiSetionF />
  <SemiMaster />
    </>

  )
}

export default Section