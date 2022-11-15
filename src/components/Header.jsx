import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-[#b3e5ff] p-6 bg-opacity-50'>
      <div className='logo'>
        <Link to={'/'}>LOGO</Link>
      </div>
      <ul className='nav flex gap-7 text-[white]'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
      <button className='button'>
        <Link to={'/login'}>Login</Link>
      </button>
    </div>
  )
}

export default Header
