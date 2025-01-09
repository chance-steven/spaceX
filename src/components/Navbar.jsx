import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between fixed top-6 w-full  uppercase h-24 py-0 px-8'>
       <Link to={"/"} ><img src='/public/logo.png' className='w-80 '/></Link> 
        <ul className='flex gap-3 text-white'>
            <Link to={"/falcon9"} className='hover:underline text-xs'>FALCON 9</Link>
            <Link to={"/falconHeavy"} className='hover:underline text-xs'>FALCON HEAVY</Link>
            <Link to={"/falconH"} className='hover:underline text-xs'>DRAGON</Link>
            <Link to={"/falconH"} className='hover:underline text-xs'>STARSHIP</Link>
            <Link to={"/falconH"} className='hover:underline text-xs'>HUMAN SPACEFLIGHT</Link>
            <Link to={"/falconH"} className='hover:underline text-xs'>RIDESHARE</Link>
            <Link to={"/falconH"} className='hover:underline text-xs'>FALCON 9</Link>
            <Link to={"/falconH"} className='hover:underline text-xs'>SHOP</Link>

        </ul>
      </div>
  )
}

export default Navbar 