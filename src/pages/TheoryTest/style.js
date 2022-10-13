import styled from 'styled-components'

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TestHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 30px;
  padding: 2rem;
  margin: 2rem;
`

export const TestBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  align-items: center;
  border-radius: 30px;
  padding: 1rem 20rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  span {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  max-width: 35%;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`

export const ButtonBack = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors['brand-blue']};
  gap: 0.5rem;
`
