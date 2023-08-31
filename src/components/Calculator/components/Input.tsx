import React from 'react'
import { Logo } from '@/ui'
import { useFormContext } from 'react-hook-form'

type Props = {
    name: string
    type: 'number' | 'tel'
    label: string
    options: Array<string> | false
    loading?: boolean
    disabled?: boolean
}

export const Input = ({ name, label, options, loading, type, disabled }: Props) => {
    const { register } = useFormContext()

    return (
        <div className='h-[60px] w-full border border-[#46475e] rounded overflow-hidden flex mb-6 relative'>
            <div className={`${options ? 'w-[60%]' : 'w-full'} relative`}>
                <label htmlFor='desc' className='absolute top-[5px] left-[20px] text-gray-300'>{label}</label>
                <input
                    disabled={disabled}
                    {...register(name)}
                    id='desc'
                    name={name}
                    className={`w-full px-4 py-6 bg-[#3e3e59] outline-none text-xl ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                    type={type}
                />
                {loading && <div className='absolute -bottom-[4px] left-2 z-10'><Logo variant='small'/></div>}
            </div>

            {options && (
                <div className='w-[40%]'>
                    <select className='w-full px-4 h-full bg-[#36324a] cursor-pointer outline-none uppercase' name="crypto" >
                        {React.Children.toArray(options.map(option => <option value={option}>{option}</option>))}
                    </select>
                </div>
            )}
        </div>
    )
}   
