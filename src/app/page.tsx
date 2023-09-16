import { css, cva } from '../../styled-system/css'
import { styled } from '../../styled-system/jsx'

const buttonRecipe = cva({
  base: { cursor: 'pointer', padding: '4', fontSize: '12px' },
  variants: {
    visual: {
      solid: { bg: 'red.500', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'red.500' },
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '20px' },
    },
  },
  compoundVariants: [
    {
      visual: 'outline',
      size: 'lg',
      css: {
        borderWidth: '4px',
        borderColor: 'black',
      },
    },
  ],
  defaultVariants: { visual: 'outline', size: 'lg' },
})

const Button = styled('button', buttonRecipe)

export default function Home() {
  return (
    <>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Hello 🐼!</div>
      <button className={buttonRecipe({ visual: 'outline', size: 'sm' })}>Hello 🐼!</button>
      <div>
        <Button visual="solid">Panda Component</Button>
      </div>
    </>
  )
}
