type Props = {
    sellOrBuy: 'buy' | 'sell'
    disabled?: boolean
}

export const Button = ({ sellOrBuy, disabled }: Props) => {
  return (
    <button 
    className='h-[50px] px-4 py-2 w-full bg-[#0071e3] rounded uppercase hover:bg-[0_100%] duration-500
     disabled:cursor-not-allowed '
    disabled={disabled}
    >
        {sellOrBuy}
</button>
  )
}
