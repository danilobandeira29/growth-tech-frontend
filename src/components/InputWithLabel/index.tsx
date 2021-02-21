import { FC } from 'react'
import { AbstractInputWithLabel } from '../../dtos/InputWithLabel'

const InputWithLabel: FC<AbstractInputWithLabel> = ({ name, type, labelAndPlaceholder, refForm }) => {
  return (
    <>
      <label htmlFor={name}>{labelAndPlaceholder}</label>
      <input 
        type={type} 
        placeholder={labelAndPlaceholder} 
        name={name}
        ref={refForm}
      />
    </>
  )
}

export default InputWithLabel