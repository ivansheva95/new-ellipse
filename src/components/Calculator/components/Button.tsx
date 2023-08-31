import React from 'react'

type Props = {
    sellOrBuy: 'buy' | 'sell'
}

export const Button = ({ sellOrBuy }: Props) => {
  return (
    <button 
    className='h-[50px] px-4 py-2 w-full bg-[length:200%_200%] bg-[0_0] bg-gradient-to-b from-green-700 to-green-500 rounded uppercase hover:bg-[0_100%] duration-500'
    >
        {sellOrBuy}
</button>
  )
}
