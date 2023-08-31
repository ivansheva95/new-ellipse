import React from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './Input'
import { Button } from './Button'

type Props = {

}

type FormValues = {
  money: number
  card: number
  phone: number
  crypto: number
}

const buyCryptoSchema = yup.object({
  money: yup.number().required(),
  card: yup.number().required(),
  phone: yup.number().required(),
  crypto: yup.number().required()
})

export const Buy = () => {
    const [loadindPrice, setLoadingPrice] = React.useState(false)

    const methods = useForm<FormValues>({
      resolver: yupResolver(buyCryptoSchema)
    })

    React.useEffect(() => {
      const currentCrypto = async () => {
        setLoadingPrice(true)
        methods.setValue('crypto', null!)
        await new Promise((resole) => setTimeout(resole, 1000))
        if(methods.watch().money) {
          methods.setValue('crypto', methods.watch().money * 38)
        } else {
          methods.setValue('crypto', null!)
        }
        setLoadingPrice(false)
        console.log(methods.watch())
      }

      currentCrypto()
    }, [methods.watch().money])

   

    const handleSubmit: SubmitHandler<FormValues> = (data) => {
      console.log(data)
      methods.reset()
    }

  return (
    <FormProvider {...methods}>
    <form className='p-6' onSubmit={methods.handleSubmit(handleSubmit)}>
      <Input name='money' type='number' label='You Pay *' options={['UA']}/>
      <Input name='card' type='number' label='You Card *' options={false}/>
      <Input name='phone' type='tel' label='You Phone *' options={false}/>
      <Input name='crypto' type='number' label='You Get' options={['usdt']} loading={loadindPrice} disabled={true} />
      <Button sellOrBuy='buy'/>
    </form>
  </FormProvider>
  )
}
