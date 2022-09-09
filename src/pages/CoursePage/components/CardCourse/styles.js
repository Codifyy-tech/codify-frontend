import styled from 'styled-components'

export const CourseCardContainer = styled.li`
  background-color: ${({ theme }) => theme.colors[`base-background`]};
  border-radius: 15px;
  width: 15rem;
  height: 6.5rem;
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
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors[`base-background`]};
  padding: 15px;
  border-radius: 0px 0px 15px 15px;
`
