import { InputContainer, ErrorMessage, Select } from './styles'
import { forwardRef } from 'react'

export function SelectBase(
  { options, labelText, placeholder, error, ...props },
  ref,
) {
  return (
    <InputContainer>
      <label htmlFor={props.name}>{labelText}</label>
      <Select
        ref={ref}
        type="select"
        placeholder={placeholder}
        {...props}
        isInvalid={!!error}
      >
        <option value="" disabled selected>
          Selecione uma opção
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </Select>

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
  )
}

export const SelectInput = forwardRef(SelectBase)
