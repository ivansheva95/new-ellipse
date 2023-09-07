type Props = {
    sellOrBuy: 'buy' | 'sell'
    disabled?: boolean
}

export const Button = ({ sellOrBuy, disabled }: Props) => {
  return (
    <button 
    className='h-[50px] px-4 py-2 w-full bg-[length:200%_200%] bg-[0_0] bg-gradient-to-b from-blue-700 to-blue-500 rounded uppercase hover:bg-[0_100%] duration-500
     disabled:cursor-not-allowed disabled:bg-gradient-to-b disabled:from-gray-700 disabled:to-gray-500 '
    disabled={disabled}
    >
        {sellOrBuy}
</button>
  )
}
