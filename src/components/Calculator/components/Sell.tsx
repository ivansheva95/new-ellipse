import { Input } from './Input'
import { Button } from './Button'

export const Sell = () => {
    
  return (
    <form className='p-6'>
        <Input name='crypto' type='number' label='You Get' placeholder='' options={['usdt', 'bitcoin', 'etherium']}/>
        <Input name='card' type='number' label='You Card' placeholder='' options={false}/>
        <Input name='phone' type='number' label='You Phone' placeholder='' options={false}/>
        <Input name='money' type='number' label='You Pay' placeholder='' options={['USD', 'UA']}/>
        <Button sellOrBuy='sell'/>
        </form>
  )
}