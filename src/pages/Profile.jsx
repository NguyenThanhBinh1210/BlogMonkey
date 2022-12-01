import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import FeatureItem from '../components/FeatureItem'
import useOnTop from '../hooks/useOnTop'
import BaseLayout from '../layouts/BaseLayout'

const Profile = () => {
  const { scrollToTop } = useOnTop()
  const getLocal = JSON.parse(localStorage.getItem('profile'))
  const user = getLocal?.user
  useEffect(() => {
    scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { id } = useParams()
  const token = getLocal?.token
  const { loading } = useSelector((state) => ({ ...state.blog }))
  const [userIdBlog, setUserIdBlog] = useState(null)

  const getUserBlogs = async () => {
    const response = await fetch(`https://api-blogv1.onrender.com/blogs/userblog/${id}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = await response.json()
    setUserIdBlog(data)
  }
  const deleteBlog = async (idBlog) => {
    const response = await fetch(`https://api-blogv1.onrender.com/blogs/delete/${idBlog}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    await response.json()
    const newData = userIdBlog.filter((item) => item._id !== idBlog)
    toast.info('Xoá thành công!')
    setUserIdBlog(newData)
  }
  useEffect(() => {
    getUserBlogs()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BaseLayout>
      <div className='flex justify-between mobile:block mt-5 mobile:px-4'>
        <div className=' w-[20%] mobile:w-full mobile:h-max mobile:mb-10  h-[200px] '>
          <div className='flex items-center'>
            <strong className='mr-2'>Name:</strong> {user?.name}
          </div>
          <div className=''>
            <strong>Email:</strong> {user?.email}{' '}
          </div>
          <div>
            {userIdBlog?.length > 0 && (
              <div className='mt-5'>
                <Link to='/create'>
                  <Button>Create</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className=' w-[70%] mobile:w-full grid grid-cols-2'>
          {loading ? (
            <div className='flex items-center mt-20 justify-center'>
              <div className='lds-ripple mx-auto'>
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <>
              {userIdBlog?.length > 0 ? (
                userIdBlog?.map((item) => (
                  <div
                    className='mb-10 mobile:mb-0 flex flex-col justify-between mobile:flex-row h-[377px] mobile:h-max mobile:flex mobile:justify-center'
                    key={item?._id}
                  >
                    <FeatureItem profile isEdit item={item} deleteBlog={deleteBlog}></FeatureItem>
                  </div>
                ))
              ) : (
                <div>
                  You have not created any posts yet!{' '}
                  <span className='text-[#00B4AA]'>
                    <Link to='/create'>Create now?</Link>
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </BaseLayout>
  )
}

export default Profile
