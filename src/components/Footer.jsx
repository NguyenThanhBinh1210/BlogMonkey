import React from 'react'
import './css.css'
const Footer = () => {
  return (
    <div className='bg-[#b3e5ff] p-6 bg-opacity-50 flex justify-center gap-20'>
      <ul className=''>
        <div className='relative mb-4'>
          Hệ sinh thái
          <div className='absolute w-[100%] h-[1px] bg-white mt-2'></div>
        </div>
        <li>Facebook của Thanh Bình</li>
        <li>Youtobe của Thanh Bình</li>
        <li>Tiktok của Thanh Bình</li>
      </ul>
      <div className='max-w-[300px]'>
        <div className='relative mb-4'>
          Giới thiệu <div className='absolute w-[100%] h-[1px] bg-white mt-2'></div>
        </div>
        <p>
          Phát triển bởi Thanh Bình vào năm 2021, là website chia sẻ kiến thức và cung cấp các khóa học chất lượng giúp
          các bạn trẻ có phát triển kỹ năng lập trình nhanh nhất.
        </p>
      </div>
    </div>
  )
}

export default Footer
