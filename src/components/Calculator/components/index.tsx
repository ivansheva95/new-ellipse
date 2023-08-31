import React from 'react'
import { Buy } from './Buy'
import { Sell } from './Sell'

export const Calculator = () => {
  const [sellOrBuy, setEllOrBuy] = React.useState('buy')
  const handleSellOrBuy = (variant: 'buy' | 'sell') => setEllOrBuy(variant)

  return (
    <div className='max-w-[600px] w-full border-[#46475e] border rounded-md bg-[#343443] overflow-hidden shadow'>
      <div className=''>
        <button 
          className={`h-[50px] w-1/2 duration-100 ${sellOrBuy === 'buy' ? '' : 'border-[rgb(89,90,117)] border-b border-r duration-100 bg-[#30303e]'}`} 
          onClick={() => handleSellOrBuy('buy')}
          >
            Buy Crypto
         </button>
        <button 
          className={`cursor-not-allowed h-[50px] w-1/2 duration-100 ${sellOrBuy === 'sell' ? '' : 'border-[#46475e] border-b border-l duration-100 bg-[#30303e]'}`} 
          // onClick={() => handleSellOrBuy('sell')}
          >
            Sell Crypto
        </button>
      </div>
      {sellOrBuy === 'buy'
          ? <Buy />
          : <Sell />
      }
    </div>
  )
}

