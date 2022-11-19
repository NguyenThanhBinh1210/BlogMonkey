import React from 'react'
import LoginLayout from '../layouts/LoginLayout'
import Son from '../assets/images/son.jpg'
import Binh from '../assets/images/binh.jpg'
import Tuy from '../assets/images/tuy.jpg'
import Huy from '../assets/images/huy.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
const Member = [
  {
    id: 1,
    name: 'Nguyễn Thanh Bình',
    title: 'Phó nhóm.',
    image: Binh
  },
  {
    id: 2,
    name: 'Đoàn Cao Sơn',
    title: 'Nhóm trưởng.',
    image: Son
  },
  {
    id: 3,
    name: 'Võ Quốc Tuy',
    title: 'Thành viên.',
    image: Tuy
  },
  {
    id: 4,
    name: 'Đặng Quốc Huy',
    title: 'Thành viên.',
    image: Huy
  }
]
const Contact = () => {
  return (
    <LoginLayout>
      <div className='w-full border p-5 rounded-lg '>
        <Link to='/'>
          <Button>Trở về</Button>
        </Link>

        <h2 className='font-semibold text-[40px] text-[#2EBAC1] mb-5 block text-center'>Nhóm Bốn</h2>
        <div className='gap-y-5 flex flex-col'>
          <div className='card flex justify-evenly items-center'>
            <div className='avatar w-[100px] h-[100px] rounded-full overflow-hidden'>
              <img src={Binh} alt='' className='w-full h-full object-cover' />
            </div>
            <div className='info max-w-[500px]'>
              Web developer hàng đầu Việt Nam, hợp tác với nhiều công ty có tiếng trên toàn thế giới!
            </div>
          </div>
          <div className='card flex justify-evenly items-center'>
            <div className='avatar w-[100px] h-[100px] rounded-full overflow-hidden'>
              <img src={Son} alt='' className='w-full h-full object-cover' />
            </div>
            <div className='info max-w-[500px]'>
              Web developer hàng đầu Việt Nam, hợp tác với nhiều công ty có tiếng trên toàn thế giới!
            </div>
          </div>
          <div className='card flex justify-evenly items-center'>
            <div className='avatar w-[100px] h-[100px] rounded-full overflow-hidden'>
              <img src={Tuy} alt='' className='w-full h-full object-cover' />
            </div>
            <div className='info max-w-[500px]'>
              Tester hàng đầu Việt Nam, hợp tác với nhiều công ty có tiếng trên toàn thế giới!
            </div>
          </div>
          <div className='card flex justify-evenly items-center'>
            <div className='avatar w-[100px] h-[100px] rounded-full overflow-hidden'>
              <img src={Huy} alt='' className='w-full h-full object-cover' />
            </div>
            <div className='info max-w-[500px]'>
              Tester hàng đầu Việt Nam, hợp tác với nhiều công ty có tiếng trên toàn thế giới!
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Contact
