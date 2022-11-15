import React from 'react'
import LoginLayout from '../layouts/LoginLayout'
import Logo from '../assets/images/biglogo.png'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Button from '../components/Button'

const SignupSchema = yup.object().shape({
  email: yup.string().email('Không đúng định dạng email!').required('Email là bắt buộc!'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Mật khẩu ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường và 1 số!'
    )
})
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  })
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <LoginLayout>
      <div className='flex flex-col items-center'>
        <img src={Logo} alt='' className='w-[121px] h-[143px] mb-6' />
        <h2 className='font-semibold text-[40px] text-[#2EBAC1]'>Monkey Blogging</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col mb-8'>
          <label className='font-semibold text-[20px] mb-6'>Email address</label>
          <div className='border rounded-lg p-6 mb-3'>
            <input
              {...register('email')}
              placeholder='Please enter your email address '
              className='placeholder:text-[20px] w-full bg-white text-[20px]'
            />
          </div>
          {errors.email && <p className='text-[#fa3b3b]'>{errors.email.message}</p>}
        </div>
        <div className='flex flex-col mb-10'>
          <label className='font-semibold text-[20px] mb-6'>Password</label>
          <div className='border rounded-lg p-6 mb-3'>
            <input
              {...register('password')}
              placeholder='Please enter your password'
              className='placeholder:text-[20px] w-full bg-white text-[20px]'
            />
          </div>
          {errors.password && <p className='text-[#fa3b3b]'>{errors.password.message}</p>}
        </div>
        <div className='w-full flex justify-center'>
          <Button linearGradient={true} login={true}>
            Login
          </Button>
        </div>
      </form>
    </LoginLayout>
  )
}

export default Login
