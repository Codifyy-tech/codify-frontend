import styled from 'styled-components'

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const CourseCategory = styled.section`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    form {
      justify-content: space-evenly;
    }
  }
`

export const CourseArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
`

export const CourseList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`
