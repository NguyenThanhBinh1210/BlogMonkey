import React from 'react'
import TestBg from '../assets/images/Card_Feature.png'
import Dot from '../assets/icons/Ellipse22.png'
const BlogItem = () => {
  return (
    <div className='w-[361px] h-[272px] relative cursor-pointer'>
      <img src={TestBg} alt='' className='w-full h-full' />
      <div className='absolute text-white top-0 w-full pl-[25px] pr-[25px]'>
        <div className='flex items-center justify-between mt-[23px]'>
          <div className='bg-[#F3EDFF] rounded-[10px] text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
            Kiến thức
          </div>
          <div className='flex items-center text-[14px] font-montserrat'>
            <span>Mar 23</span>
            <img src={Dot} alt='' className='w-[6px] h-[6px] mx-1' />
            <span>Binh dep trai</span>
          </div>
        </div>
        <div className='leading-[28px] text-[22px] font-[600] font-montserrat mt-[15px]'>
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </div>
      </div>
    </div>
  )
}

export default BlogItem
