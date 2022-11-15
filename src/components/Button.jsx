import React from 'react'

const Button = ({ children, linearGradient, login }) => {
  return (
    <button
      className={`${
        login ? 'w-[343px] h-[80px] text-[24px] ' : 'w-[191px]'
      }  rounded-lg text-md font-semibold text-white p-2 ${
        linearGradient ? 'bg-gradient-to-br from-[#00B4AA] to-[#3bf683]' : 'bg-[#00B4AA]'
      }`}
    >
      {children}
    </button>
  )
}

export default Button
