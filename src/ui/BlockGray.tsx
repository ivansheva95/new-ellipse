import React from 'react'

export const BlockGray = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='border-[#46475e]
    border-transparent
    border rounded-[20px]
    bg-[#f5f5f7]
    shadow-lg
     overflow-hidden shadow
    px-[30px]
    py-[50px]'>
        {children}
    </div>
  )
}
