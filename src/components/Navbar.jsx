import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex gap-60'>
        <img src='/public/logo.png' className='w-40 pl-20'/>
        <ul className='flex gap-6 text-white'>
            <Link className='text-sm'>FALCON 9</Link>
            <Link className='text-sm'>FALCON HEAVY</Link>
            <Link className='text-sm'>DRAGON</Link>
            <Link className='text-sm'>STARSHIP</Link>
            <Link className='text-sm'>HUMAN SPACEFLIGHT</Link>
            <Link className='text-sm'>RIDESHARE</Link>
            <Link className='text-sm'>FALCON 9</Link>
            <Link className='text-sm'>SHOP</Link>

        </ul>
      </div>
  )
}

export default Navbar