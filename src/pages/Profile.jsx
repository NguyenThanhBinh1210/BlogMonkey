import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import FeatureItem from '../components/FeatureItem'
import useOnTop from '../hooks/useOnTop'
import BaseLayout from '../layouts/BaseLayout'
import { getUser } from '../redux/feature/authSlice'
import { getBlogByUserId } from '../redux/feature/blogSlice'

const Profile = () => {
  const { scrollToTop } = useOnTop()
  useEffect(() => {
    scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { id } = useParams()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({ ...state.auth }))
  const { blogs, loading } = useSelector((state) => ({ ...state.blog }))
  useEffect(() => {
    if (id) {
      dispatch(getUser(id))
      dispatch(getBlogByUserId(id))
    } else {
    }
  }, [dispatch, id])
  if (!user && !blogs) return null

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
            {blogs.length > 0 && (
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
              {blogs.length > 0 ? (
                blogs.map((item) => (
                  <div className='mb-10 mobile:flex mobile:justify-center' key={item?._id}>
                    <FeatureItem profile isEdit item={item}></FeatureItem>
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
