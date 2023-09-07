import React from 'react'
import { Logo } from '@/ui'
import { useController, useFormContext } from 'react-hook-form'

type Props = {
    name: string
    type?: 'text' | 'number' | 'tel'
    label: string
    options: Array<string> | false
    loading?: boolean
    disabled?: boolean
    placeholder: string
}

export const Input = ({ name, label, options, loading, type = 'text', disabled, placeholder }: Props) => {
    const { control, setValue, formState: { errors } } = useFormContext()
    const { field } = useController({ name, control })
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(name, typeof event.target.value);
        
        switch (event.target.name) {
            case 'phone': {
                const value = event.target.value.replace(/\D/g, '')
                let phone = ''
                if (value.length <= 3) {
                    phone = `${value.substring(0, 3)}`
                    setValue(name, phone)
                } else if (value.length <= 6) {
                    phone = `${value.substring(0, 3)} ${value.substring(3, 6)}`
                    setValue(name, phone)
                } else if (value.length <= 8) {
                    phone = `${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6, 8)}`
                    setValue(name, phone)
                } else if (value.length <= 10) {
                    phone = `${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6, 8)} ${value.substring(8, 10)}`
                    setValue(name, phone)
                }
                break
            }
            case 'card': {
                const value = event.target.value.replace(/\D/g, '')
                let card = ''
                if (value.length <= 4) {
                    card = `${value.substring(0, 4)}`
                    setValue(name, card)
                } else if (value.length <= 8) {
                    card = `${value.substring(0, 4)} ${value.substring(4, 8)}`
                    setValue(name, card)
                } else if (value.length <= 12) {
                    card = `${value.substring(0, 4)} ${value.substring(4, 8)} ${value.substring(8, 12)}`
                    setValue(name, card)
                } else if (value.length <= 16) {
                    card = `${value.substring(0, 4)} ${value.substring(4, 8)} ${value.substring(8, 12)} ${value.substring(12, 16)}`
                    setValue(name, card)
                }
                break
            }
            default: {
                setValue(name, event.target.value)
            }
        }
    }

    return (
        <div className='mb-2'>
            <div className={`h-[60px] w-full border ${errors[name] ? 'border-red-500' : 'border-[#46475e]'} rounded overflow-hidden flex  relative`}>
                <div className={`${options ? 'w-[60%]' : 'w-full'} relative`}>
                    <label htmlFor='desc' className='absolute top-[5px] left-[20px] text-gray-300'>{label}</label>
                    <input
                        ref={field.ref}
                        onBlur={field.onBlur}
                        onChange={onChange}
                        value={field.value}
                        name={field.name}
                        placeholder={placeholder}
                        disabled={disabled}
                        id='desc'
                        className={`w-full px-4 py-6 bg-[#3e3e59] outline-none text-xl ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                        type={type}
                    />
                    {loading && <div className='absolute -bottom-[4px] left-2 z-10'><Logo variant='small' /></div>}
                </div>

                {options && (
                    <div className='w-[40%]'>
                        <select className='w-full px-4 h-full bg-[#36324a] cursor-pointer outline-none uppercase' name="crypto" >
                            {React.Children.toArray(options.map(option => <option value={option}>{option}</option>))}
                        </select>
                    </div>
                )}
            </div>
            <div className='ml-2 h-5 w-full text-red-500'>
                {errors[name] ? (errors[name]?.message as string) : null}
            </div>
        </div>
    )
}   
