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

  > section {
    max-width: 31.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    padding: 0 2rem;
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
