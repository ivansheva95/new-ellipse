import React from 'react'
import { Logo } from '@/ui'

export const Header = () => {
  return (
    <header className=''>
     <div className='h-[100px] flex justify-between items-center wrapper'>
        <Logo />
        <div>
          <ul className='flex space-x-4'>
            <li><a className='hover:text-blue-500 cursor-pointer duration-150' href="">page1</a></li>
            <li><a className='hover:text-blue-500 cursor-pointer duration-150' href="">page2</a></li>
            <li><a className='hover:text-blue-500 cursor-pointer duration-150' href="">page3</a></li>
            <li><a className='hover:text-blue-500 cursor-pointer duration-150' href="">page4</a></li>
          </ul>
        </div>
        <div className='hover:text-blue-500 cursor-pointer duration-150'>Language</div>
     </div>
    </header>
  )
}
