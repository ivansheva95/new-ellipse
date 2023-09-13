import React from 'react'
import { Buy } from './Buy'
import { Sell } from './Sell'

export const Calculator = () => {
  const [sellOrBuy, setEllOrBuy] = React.useState('buy')
  const handleSellOrBuy = (variant: 'buy' | 'sell') => setEllOrBuy(variant)

  return (
    <div className='max-w-[600px] w-full 
    border-[#46475e]
    border-transparent
    border rounded-[20px]
    bg-[#343443] 
    bg-[#f5f5f7]
    shadow-lg
     overflow-hidden shadow'>
      <div className=''>
        <button 
          className={`h-[50px] w-1/2 duration-100 ${sellOrBuy === 'buy' ? '' : ' duration-100 bg-[#f2f2f4]'}`} 
          onClick={() => handleSellOrBuy('buy')}
          >
            Buy Crypto
         </button>
        <button 
          className={`cursor-not-allowed h-[50px] w-1/2 duration-100 ${sellOrBuy === 'sell' ? '' : ' duration-100 bg-[#fbfbfd]'}`} 
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

