import React, { useEffect } from 'react'
import FeatureItem from '../components/FeatureItem'
import BaseLayout from '../layouts/BaseLayout'

import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchBlog } from '../redux/feature/blogSlice'
import Button from '../components/Button'

const Blog = () => {
  const { blogs } = useSelector((state) => state.blog)
  const { search } = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const hanldeReset = () => {
    navigate('/blog')
  }
  // console.log(search)
  useEffect(() => {
    if (search) {
      const searchQuery = search.replace('?searchQuery=', '')
      console.log(searchQuery)
      dispatch(searchBlog(searchQuery))
    }
  }, [search, dispatch])

  return (
    <BaseLayout>
      <div className='mt-10 gap-6 grid grid-cols-4'>
        {blogs &&
          blogs.map((item) => (
            <div className='w-[267px] mb-2' key={item?._id}>
              <FeatureItem item={item}></FeatureItem>
            </div>
          ))}
      </div>
      {search && (
        <div className='w-full flex justify-center mt-20' onClick={hanldeReset}>
          <Button>Reset</Button>
        </div>
      )}
    </BaseLayout>
  )
}

export default Blog
