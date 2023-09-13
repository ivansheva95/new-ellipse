import { BlockGray } from '@/ui'
import { StepsItem } from './StepsItem'

export const Steps = () => {
    return (
        // <section className='px-[16px] py-[32px] bg-[#f5f5f7] w-full'>
            <BlockGray>
                <h2 className='text-[36px] mb-[50px] text-center'>Simple and fast usability</h2>
                <div className='flex justify-between'>
                    <StepsItem
                        img='dsadsa'
                        title='Choose currancy'
                        descr='Pick one of 50 000+ supported currency pairs from the list' />

                    <StepsItem
                        img='dsadsa'
                        title='Choose currancy'
                        descr='Pick one of 50 000+ supported currency pairs from the list' />

                    <StepsItem
                        img='dsadsa'
                        title='Choose currancy'
                        descr='Pick one of 50 000+ supported currency pairs from the list' />
                </div>
            </BlockGray>

        // </section>
    )
}
