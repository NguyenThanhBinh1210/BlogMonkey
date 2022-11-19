import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from './Button'
import Search from '../assets/icons/search.png'
import Logo from '../assets/images/logo.png'
import { setLogout } from '../redux/feature/authSlice'
import { useDispatch } from 'react-redux'

import { searchBlog } from '../redux/feature/blogSlice'
import { toast } from 'react-toastify'

const Header = () => {
  const { pathname } = useLocation()
  const [searchR, setSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { search } = useLocation()
  const checkLogin = JSON.parse(localStorage.getItem('profile'))?.result?.name
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/blog?searchQuery=${searchR}`)
  }
  const handleLogout = () => {
    dispatch(setLogout())
    navigate('/')
    toast.info('Đăng xuất thành công!')
  }
  useEffect(() => {
    if (pathname === '/blog' && !search) {
      dispatch(searchBlog(searchR))
    }
  }, [searchR, dispatch, pathname, navigate, search])
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
      <div className='flex items-center'>
        <form
          onSubmit={handleSearch}
          className='rounded-lg overflow-hidden flex justify-between pl-4 pr-4 bg-white items-center mr-4 w-[320px] h-[60px] border'
        >
          <input
            value={searchR}
            onChange={(e) => setSearch(e.target.value)}
            type='text'
            placeholder='Search posts..'
            className='outline-none placeholder:text-md'
          />
          <button type='submit'>
            <img src={Search} alt='' className='w-[16px] h-[14.52px] cursor-pointer' />
          </button>
        </form>
        {checkLogin && (
          <>
            <h1 className='hover-info relative'>
              Hi, I'm <strong className='cursor-pointer'>{checkLogin}</strong>
              <div className='info-grid grid grid-row-3 p-3'>
                <div className='m-auto border-b cursor-pointer'>My account</div>
                <div className='m-auto border-b cursor-pointer'>Dasboard</div>
                <div className='m-auto border-b cursor-pointer text-[#2EBAC1] font-semibold' onClick={handleLogout}>
                  Log Out
                </div>
              </div>
            </h1>
          </>
        )}
        {!checkLogin && (
          <Button>
            <Link to={'/login'} className='flex w-full h-full items-center justify-center'>
              Sign Up
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

export default Header
