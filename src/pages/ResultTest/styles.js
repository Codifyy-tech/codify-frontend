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

  @media (max-width: 600px) {
    padding: 2rem;

    img {
      width: 40% !important;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem !important;
  width: 60% !important;
  text-align: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  max-width: 50%;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`
