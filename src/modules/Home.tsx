import { Steps } from '@/components'
import { HomePromo } from '@/sections/HomePromo'

export const Home = () => {
  return (
    <div className='max-w-[1200px] px-[15px] mx-auto'>

    <HomePromo />
    <Steps />
    <section className='h-screen'></section>
    </div>
  )
}
