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
