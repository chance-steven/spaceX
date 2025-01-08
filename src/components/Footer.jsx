import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-black text-white '>
    <div className='flex justify-center items-center gap-4 py-20 '>
    <p>SPACEX &copy; {new Date().getFullYear()}</p>
    <Link to={"https://x.com/"} className='hover:text-gray-500'>Twitter</Link>
    <Link to={"https://www.facebook.com/"} className='hover:text-gray-500'>YouTube</Link>
    <Link to={"https://www.instagram.com/p/DDzeKrdKvXn/"} className='hover:text-gray-500'>Instagram</Link>
    <Link to={"https://www.flickr.com/"} className='hover:text-gray-500'>flickr</Link>
    <Link to={"https://fr.linkedin.com/"} className='hover:text-gray-500'>LinkedIn</Link>
    <Link to={"https://policies.google.com/privacy?hl=en-US"} className='hover:text-gray-500'>Privacy</Link>
    <Link to={"https://en.wikipedia.org/wiki/Supplier"} className='hover:text-gray-500'> Suppliers</Link>

    </div>
    
    </div>
  )
}

export default Footer