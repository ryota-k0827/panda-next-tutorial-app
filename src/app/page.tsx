import { css, cva } from '../../styled-system/css'

const buttonRecipe = cva({
  base: { fontSize: 'xl', mx: '2' },
  variants: {
    visual: {
      add: {color: 'green.500'},
      toggle: {color: 'gray.500'}
    }
  }
})

const todoListWrapperRecipe = cva({
  base: { w: '460px', display: 'flex', justifyContent: 'space-between', border: 'solid', borderColor: 'gray.400', mb: '4px', pl: '8px' },
})

export default function Home() {
  return (
    <>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold', textAlign: 'center' })}>🐼 + Next.js13 ToDo App</div>
      <div className={css({ display: 'grid', justifyContent: 'center' })}>
        <div className={todoListWrapperRecipe()}>
          <h2>No Status</h2>
          <div>
            <button className={buttonRecipe({ visual: 'add' })}>+</button>
            <button className={buttonRecipe({ visual: 'toggle' })}>&or;</button>
          </div>
        </div>
        {/* <ul></ul> */}
        <div className={todoListWrapperRecipe()}>
          <h2>ToDo</h2>
          <div>
            <button className={buttonRecipe({ visual: 'add' })}>+</button>
            <button className={buttonRecipe({ visual: 'toggle' })}>&or;</button>
          </div>
          {/* <ul></ul> */}
        </div>
        <div className={todoListWrapperRecipe()}>
          <h2>In Progress</h2>
          <div>
            <button className={buttonRecipe({ visual: 'add' })}>+</button>
            <button className={buttonRecipe({ visual: 'toggle' })}>&or;</button>
          </div>
          {/* <ul></ul> */}
        </div>
        <div className={todoListWrapperRecipe()}>
          <h2>Done</h2>
          <div>
            <button className={buttonRecipe({ visual: 'add' })}>+</button>
            <button className={buttonRecipe({ visual: 'toggle' })}>&or;</button>
          </div>
          {/* <ul></ul> */}
        </div>
      </div>
    </>
  )
}
