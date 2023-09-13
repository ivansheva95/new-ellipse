import { Outlet } from 'react-router-dom'
import { 
  Header 
} from '@/modules'

export const RootLayout = () => {
  return (
    <div className='min-h-screen bg-[#fff] text-#000 flex flex-col'>
        <Header />
        <main className='flex-auto'>
            <Outlet />
        </main>
    </div>
  )
}
