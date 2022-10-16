import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 1rem 1rem;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  @media (max-width: 768px) {
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
  }
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

export const UserButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 70%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['base-button']};
  width: 10rem;
  border-radius: 15px;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`
