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
  padding: 2rem;

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
`

export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  max-width: 24%;
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
