import { Input, InputContainer, ErrorMessage } from './styles'
import { forwardRef } from 'react'

export function InputBase(
  { labelText, placeholder, inputColor, disabled, typeInput, error, ...props },
  ref,
) {
  return (
    <InputContainer>
      <label htmlFor={props.name}>{labelText}</label>
      <Input
        ref={ref}
        type={typeInput}
        placeholder={placeholder}
        inputColor={inputColor}
        disabled={disabled}
        {...props}
        isInvalid={!!error}
      />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
}

export const InputForm = forwardRef(InputBase)
