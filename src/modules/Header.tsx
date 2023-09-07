import { MenuDesktop } from '@/components'
import { Logo } from '@/ui'

export const Header = () => {
  return (
    <header className=''>
     <div className='h-[100px] flex justify-between items-center wrapper'>
        <Logo />
        <MenuDesktop />
        <div className='hover:text-blue-500 cursor-pointer duration-150'>Language</div>
     </div>
    </header>
  )
}
