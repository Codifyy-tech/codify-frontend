import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const SignInDescSide = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.1rem;
  text-align: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  border-radius: 0px 10px 10px 0px;
  padding: 0px 2rem;

  > aside {
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    align-items: center;
    max-width: 21.87rem;
    gap: 2.8rem;

    > div {
      display: flex;
      flex-direction: column;
      margin: 0px auto;
      align-items: center;
      max-width: 21.87rem;
      gap: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
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
