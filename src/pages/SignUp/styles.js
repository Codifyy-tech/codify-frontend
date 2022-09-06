import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const SignInFormSide = styled.main`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  overflow: auto;

  > section {
    max-width: 31.25rem;
    display: flex;
    flex-direction: column;
    align-self: start;
    gap: 40px;
    padding: 32px 32px;
    margin-top: 10%;
  }
`

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

export const MobileArea = styled.div`
  display: none;

  a {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 1.5rem;
  }
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

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors[`base-error`]};
  font-size: ${({ theme }) => theme.textSizes[`text-s`]};
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
export const DistrictInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`
