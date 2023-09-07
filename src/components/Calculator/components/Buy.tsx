import React from 'react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from './Input'
import { Button } from './Button'

type FormValues = {
  money: string
  card: string
  phone: string
  crypto: string
}

const buyCryptoSchema = yup.object({
  money: yup.string().required(),
  card: yup.string().required().min(19).max(19),
  phone: yup.string().required().min(13).max(13),
  crypto: yup.string().required()
})

export const Buy = () => {
    const [loadindPrice, setLoadingPrice] = React.useState(false)

    const methods = useForm<FormValues>({
      mode: 'onBlur',
      resolver: yupResolver(buyCryptoSchema),
      defaultValues: {
        money: '',
        card: '',
        phone: '',
        crypto: ''
      }
    })

    React.useEffect(() => {
      const currentCrypto = async () => {
        methods.setValue('crypto', '')
        setLoadingPrice(true)
        await new Promise((resole) => setTimeout(resole, 1000))
        if(methods.watch().money) {
          methods.setValue('crypto', (Number(methods.watch().money) / 38).toFixed(4))
        } else {
          methods.setValue('crypto', '')
        }
        setLoadingPrice(false)  
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
        <Input name='money' type='number' label='You Pay *' placeholder='' options={['UA']}/>
        <Input name='card' label='You Card *' placeholder='0000 0000 0000 0000' options={false}/>
        <Input name='phone' type='tel' label='You Phone *' placeholder='090 000 00 00' options={false}/>
        <Input name='crypto' type='number' label='You Get' placeholder='' options={['usdt']} loading={loadindPrice} disabled={true} />
        <Button sellOrBuy='buy' disabled={!methods.formState.isValid}/>
      </form>
    </FormProvider>
  )
}
