import { Steps } from '@/components'
import { Home } from '@/modules'

export const HomePage = () => {
  return (
    <>
      <div className='max-w-[1200px] px-[15px] mx-auto'>
        <Home />
        <Steps />
        <section className='h-screen'></section>

      </div>

    </>
  )
}
