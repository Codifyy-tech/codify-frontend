import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CepContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 500;
  padding: 20px 45px;
  margin: 0 auto;
  border-radius: 10px;
  border: 0px;
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors[`base-error`]};
  font-size: ${({ theme }) => theme.textSizes[`text-s`]};
`

export const DistrictInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`
