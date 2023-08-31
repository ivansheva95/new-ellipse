import sprite from '@/assets/svg/_sprite.svg'

type Props = {
    name: 'visa' | 'paypal' | 'mastercard'
    height?: number | string
    width?: number | string
}

export const Icon = ({ name, height = 40, width = 40 }: Props) => {
  return (
    <svg height={height} width={width}>
        <use height='100%' width='100%' href={`${sprite}#${name}`}/>
    </svg>
  )
}
