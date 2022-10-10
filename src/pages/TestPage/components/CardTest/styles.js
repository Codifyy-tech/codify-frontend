import styled from 'styled-components'

export const CardTestContainer = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 15px;
  padding: 18px;
  gap: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  padding: 1rem;
  height: 146px;

  > img {
    max-width: 140px;
    width: 100%;
  }
`

export const CardDesc = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
`

export const CardTitle = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardText = styled.ul`
  max-width: 600px;
  font-weight: 300;
  margin-top: 0.2rem;
`

export const TagContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
