import styled from 'styled-components'

export const CourseCardContainer = styled.li`
  background-color: ${({ theme }) => theme.colors[`base-background`]};
  border-radius: 15px;
  cursor: pointer;
`

export const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors[`base-background`]};
  width: 100%;
  border-radius: 15px 15px 0px 0px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors[`base-background`]};
  padding: 1rem 1rem 1.5rem 1rem;
  gap: 0.5rem;
  border-radius: 0px 0px 15px 15px;
`
