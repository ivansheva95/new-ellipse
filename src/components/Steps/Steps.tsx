import { BlockGray } from '@/ui'
import { StepsItem } from './StepsItem'

export const Steps = () => {
    return (
            <BlockGray>
                <h2 className='text-[42px] mb-[50px] text-center font-medium'>Simple and fast usability</h2>
                <div className='flex justify-between'>
                    <StepsItem
                        img='dsadsa'
                        title='Make deposit'
                        descr='Pick one of 50 000+ supported currency pairs from the list' />

                    <StepsItem
                        img='dsadsa'
                        title='Choose currancy'
                        descr='Pick one of 50 000+ supported currency pairs from the list' />

                    <StepsItem
                        img='dsadsa'
                        title='Get your coins'
                        descr='Pick one of 50 000+ supported currency pairs from the list' />
                </div>
            </BlockGray>
    )
}
