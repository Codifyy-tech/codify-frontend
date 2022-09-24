import styled from 'styled-components'

export const CardCourseContainer = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 15px;
  padding: 1.6em;
  gap: 1.5rem;
  cursor: pointer;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 10rem;
  border-radius: 10px;
  padding: 1rem;
`

export const CardDesc = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const CardTitle = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardText = styled.ul`
  max-width: 400px;
  font-weight: 300;
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

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`

export const Icon = styled.img`
  width: 3rem;
  height: auto;
`
