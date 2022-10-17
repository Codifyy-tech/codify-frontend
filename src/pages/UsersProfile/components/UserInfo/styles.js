import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 0rem;
  }
`

export const UserCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    cursor: pointer;
  }
`

export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  cursor: pointer;
`

export const UserInfoArea = styled.div`
  display: flex;
  gap: 5rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const UserCourseArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
  }
`

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

  @media (max-width: 768px) {
    width: 100%;
  }
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
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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

  svg {
    width: 3rem;
    height: auto;
    border-radius: 100%;
    background-color: #deebfe;
    color: #1a75e8;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`

export const CourseContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
