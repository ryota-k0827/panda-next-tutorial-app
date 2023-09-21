import { css } from '../../styled-system/css'
import { styled } from '../../styled-system/jsx'
import { buttonRecipe } from './recipes'

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
