import { FC } from 'react'
import { ButtonModel } from '../../../model/button/button'

const ButtonComponent: FC<ButtonModel> = ({title, ...props}) => (
  <button {...props}>
    {title}
  </button>
)

export default ButtonComponent