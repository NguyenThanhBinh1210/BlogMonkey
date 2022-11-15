import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Search from '../assets/icons/search.png'
import Logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className='flex p-6 justify-between'>
      <div className='flex items-center gap-x-8'>
        <div className='logo'>
          <Link to={'/'}>
            <img src={Logo} alt='' className='w-[43px] h-[56px]' />
          </Link>
        </div>
        <ul className='nav flex gap-7 text-black text-lg font-semibold'>
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
      </div>
      <div className='flex'>
        <div className=' rounded-lg overflow-hidden flex justify-between pl-4 pr-4 bg-white items-center mr-4 w-[320px] h-[60px]'>
          <input type='text' placeholder='Search posts..' className='outline-none placeholder:text-md' />
          <img src={Search} alt='' className='w-[16px] h-[14.52px] cursor-pointer' />
        </div>
        <Button>
          <Link to={'/login'} className='flex w-full h-full items-center justify-center'>
            Sign Up
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Header
