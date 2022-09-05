import { Input, InputContainer } from './styles'
import { forwardRef } from 'react'

export function InputBase(
  { name, labelText, placeholder, typeInput, error, ...props },
  ref,
) {
  return (
    <InputContainer>
      <label htmlFor={name}>{labelText}</label>
      <Input
        ref={ref}
        type={typeInput}
        placeholder={placeholder}
        name={name}
        {...props}
      />
    </InputContainer>
  )
}

export const InputForm = forwardRef(InputBase)
