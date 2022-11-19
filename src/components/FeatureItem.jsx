import moment from 'moment/moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DotGray from '../assets/icons/Ellipse11.png'

const FeatureItem = ({ item, blog }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/blog/${item._id}`)} className={'w-[267px] cursor-pointer'}>
      <img src={item?.imageFile[0]} alt='' className='rounded-[15px] w-full h-[202px]' />
      <div>
        <div className='bg-[#F3EDFF] w-max mt-[15px] h-[26px] rounded-[10px] text-center text-[#6B6B6B] font-[600] leading-4 text-[14px] px-[10px] py-[4px]'>
          {item?.tags}
        </div>
        <div className='leading-[24px] text-[18px] font-[600] font-montserrat mt-[15px]'>{item?.title}</div>
        <div className='flex items-center text-[14px] font-[600] text-[#6B6B6B] font-montserrat'>
          <span>{moment(item?.createdAt).fromNow()}</span>
          <img src={DotGray} alt='' className='w-[6px] h-[6px] mx-3 my-[10px]' />
          <span>Binh dep trai</span>
        </div>
      </div>
    </div>
  )
}

export default FeatureItem
