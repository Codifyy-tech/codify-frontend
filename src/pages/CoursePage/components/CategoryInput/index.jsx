import { InputContainer, ContentContainer } from './styles'
import { forwardRef } from 'react'
import { RegularText } from '../../../../components/Typograph'

export function CategoryBase(
  { id, icon, label, checked, handleFilter, ...props },
  ref,
) {
  return (
    <InputContainer>
      <input
        id={id}
        type="radio"
        {...props}
        name="paymentMethod"
        ref={ref}
        checked={checked}
        onChange={handleFilter}
      />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          <RegularText fontSize="text-m" weight="500">
            {label}
          </RegularText>
        </ContentContainer>
      </label>
    </InputContainer>
  )
}

export const CategoryInput = forwardRef(CategoryBase)
