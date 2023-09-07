import { Outlet } from 'react-router-dom'
import { 
  Header 
} from '@/modules'

export const RootLayout = () => {
  return (
    <div className='min-h-screen bg-[#2b2b36] text-white flex flex-col'>
        <Header />
        <main className='flex-auto'>
            <Outlet />
        </main>
    </div>
  )
}
