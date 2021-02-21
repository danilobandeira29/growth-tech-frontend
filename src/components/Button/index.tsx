import { ButtonHTMLAttributes, DetailedHTMLProps, FC, FunctionComponent } from 'react'
import { IconProps } from 'react-feather'
import './style.css'

interface AbstractButton 
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: FunctionComponent<IconProps>
}

const Button: FC<AbstractButton> = ({ children, icon: Icon, ...props }) => {
  return (
    <button { ...props }>
      <Icon />
      {children}
    </button>
  )
}

export default Button
