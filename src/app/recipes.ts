import { cva } from "../../styled-system/css";

export const buttonRecipe = cva({
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
