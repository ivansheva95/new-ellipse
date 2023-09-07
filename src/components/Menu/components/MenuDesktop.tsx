import React from 'react'
import { MenuData } from '../data/MenuData'

export const MenuDesktop = () => {
  return (
    <nav className=''>
        <ul className='flex space-x-4'>
            {React.Children.toArray(
                MenuData['en']
                    .map(({label, href}) => 
                        <li className='hover:text-blue-500 cursor-pointer duration-150'>
                            <a href={href}></a>{label}
                        </li>)
            )}
        </ul>
    </nav>
  )
}
