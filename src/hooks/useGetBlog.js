import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../redux/feature/blogSlice'

const useGetBlog = () => {
  const { blogs } = useSelector((state) => state.blog)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])

  return { blogs }
}

export default useGetBlog
