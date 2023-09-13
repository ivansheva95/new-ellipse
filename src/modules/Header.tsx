import { MenuDesktop } from '@/components'
import { Logo } from '@/ui'

export const Header = () => {
  return (
    <header className='bg-[rgb(201, 201, 202)]/{0.5} fixed w-[100%] h-[45px] z-10 backdrop-blur-md'>
     <div className='h-[100%] flex justify-between items-center wrapper'>
        <Logo />
        <MenuDesktop />
        <div className='hover:text-blue-500 cursor-pointer duration-150'>Language</div>
     </div>
    </header>
  )
}
