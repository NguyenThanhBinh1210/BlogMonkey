import React, { useEffect, useState } from 'react'
import Gallery from '../assets/icons/gallery.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../components/Button'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createBlog, editBlog, getBlog } from '../redux/feature/blogSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignupSchema = yup.object().shape({
  title: yup.string().required('Tiêu đề là bắt buộc!'),
  description: yup.string().required('Chưa nhập nội dung!'),
  tags: yup.string().required('Danh mục là bắt buộc!'),
  main: yup.string().required('Chưa nhập nội dung!')
})

const Create = () => {
  const { id } = useParams()
  const { blog } = useSelector((state) => ({ ...state.blog }))
  const [selectImages, setSelectImages] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  })
  const onSubmit = (data) => {
    if (selectImages) {
      const newData = {
        userId: JSON.parse(localStorage.getItem('profile'))?.user?._id,
        ...data,
        imageFile: [...selectImages]
      }
      const updatedBlogData = { ...newData }
      if (!id) {
        dispatch(createBlog({ newData, navigate, toast }))
      }
      if (id) {
        dispatch(editBlog({ updatedBlogData, id, navigate, toast }))
      }
    }
  }
  useEffect(() => {
    if (id) {
      dispatch(getBlog(id))
    }
  }, [id, dispatch])

  return (
    <div className='max-w-[1000px] mx-auto pt-10 mobile:w-[90%] pb-10'>
      <div className='mb-10' onClick={() => navigate(-1)}>
        <Button>Back</Button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <div className='flex justify-between mobile:flex-col'>
          <div className='left w-[400px] mobile:w-full'>
            <div className='flex flex-col mb-8'>
              <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Title</label>
              <div className='border rounded-lg pl-3 mb-3 h-[48px] flex items-center'>
                <input
                  defaultValue={id ? blog.title : ''}
                  {...register('title')}
                  placeholder='Title '
                  className='placeholder:text-[16px] w-full bg-white text-[16px]'
                />
              </div>
              {errors.title && <p className='text-[#fa3b3b]'>{errors.title.message}</p>}
            </div>
            <div className='flex flex-col mb-8'>
              <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Short description</label>
              <div className='border rounded-lg p-3 mb-3 h-[200px] flex items-center overflow-hidden'>
                <textarea
                  id='w3review'
                  name='w3review'
                  cols='50'
                  defaultValue={id ? blog.description : ''}
                  {...register('description')}
                  placeholder='Short description'
                  className='placeholder:text-[16px] w-full bg-white text-[16px] h-full resize-none'
                />
              </div>
              {errors.description && <p className='text-[#fa3b3b]'>{errors.description.message}</p>}
            </div>
          </div>
          <div className='right w-[400px] mobile:w-full'>
            <div className='flex flex-col mb-8'>
              <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Slug</label>
              <div className='border rounded-lg pl-3 mb-3 h-[48px] flex items-center'>
                <input
                  defaultValue={id ? blog.tags : ''}
                  {...register('tags')}
                  placeholder='Slug '
                  className='placeholder:text-[16px] w-full bg-white text-[16px]'
                />
              </div>
              {errors.tags && <p className='text-[#fa3b3b]'>{errors.tags.message}</p>}
            </div>

            <div>
              <label className='font-semibold text-[20px]  text-[#84878B]'>Images</label>
              <section className='mt-[15px] relative'>
                <label className=' m-0 flex cursor-pointer flex-col base-file justify-center items-center border rounded-lg w-[400px] mobile:w-full mobile:mb-[15px] h-[200px] text-lg '>
                  <img src={Gallery} alt='' className='w-[60.41px] h-[62.43px]' />
                  <FileBase
                    type='file'
                    name='picture'
                    onDone={(base64) => {
                      const listBase = base64.map((item, index) => {
                        return item.base64
                      })
                      setSelectImages(listBase)
                    }}
                    multiple={true}
                    accept='image/png, image/jpg, image/webp'
                  />
                  <div className='absolute bottom-4'>Đã thêm {selectImages ? selectImages?.length : '0'} ảnh</div>
                </label>
              </section>
            </div>
          </div>
        </div>
        <div className='flex flex-col mb-8'>
          <label className='font-semibold text-[20px] mb-[15px] text-[#84878B]'>Content</label>
          <div className='border rounded-lg p-3 mb-3 h-[200px] flex items-center overflow-hidden'>
            <textarea
              id='w3review'
              name='w3review'
              defaultValue={id ? blog.main : ''}
              cols='50'
              {...register('main')}
              placeholder='Enter your content...'
              className='placeholder:text-[16px] w-full bg-white text-[16px] h-full resize-none'
            />
          </div>
          {errors.main && <p className='text-[#fa3b3b]'>{errors.main.message}</p>}
        </div>
        <div className='w-full flex justify-center' type='submit'>
          <Button linearGradient={true} login={true}>
            {id ? 'Edit confirm' : 'Add new post'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Create
