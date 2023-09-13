import React from 'react'

type StepsItemType = {
    img: string,
    title: string,
    descr:string
}

export const StepsItem = ({img, title, descr}: StepsItemType) => {
  return (
    <div className='max-w-[270px] text-center'>
        <img src={img} alt="" />
        <h3 className='text-[32px] mb-[13px]'>{title}</h3>
        <p className='text-[14px] font-light'>{descr}</p>
    </div>
  )
}
