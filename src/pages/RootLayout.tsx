import React from 'react'
import { Outlet } from 'react-router-dom'
import { 
  Footer, 
  Header 
} from '@/modules'

export const RootLayout = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-800 to-blue-500 text-white flex flex-col'>
        <Header />
        <main className='flex-auto'>
            <Outlet />
        </main>
        {/* <Footer /> */}
    </div>
  )
}
