import React from 'react'
import { Calculator } from '@/components'
// import { Icon } from '@/ui'
import crypto from '@/assets/img/crypto.svg'

type Props = {
    title: string,
    texts: string
}

export const HomePromo = () => {
  return (
    <section className='flex flex-col items-center min-h-[calc(100vh-100px)] wrapper pb-[40px]'>
        <div className='flex justify-center flex-auto w-full '>
           <div className='flex w-full max-md:flex-col'>
                <div className='pr-4 h-[inherit] max-md:py-8 md:w-[40%] flex justify-center items-start flex-col'>
                    <h1 className='text-5xl max-990:text-3xl leading-tight mb-2 '>Ellipse Crypto Exchange</h1>
                    <div className='990:text-3xl leading-tight text-slate-300'>
                        <p>Buy, Sell, and Swap Crypto:</p>
                        <p>Simple, Fast, Free of Custody</p>
                    </div>
                </div>

                <div className='md:pl-4 h-[inherit] md:w-[60%] flex justify-center items-center'>
                    <Calculator />
                </div>  
           </div>
        </div>
        <div className='pt-4 w-full'>
            <img src={crypto} alt='crypto' />
        </div>
    </section>
  )
}
