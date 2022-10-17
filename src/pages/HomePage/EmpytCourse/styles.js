import styled from 'styled-components'

export const EmptyCourseContainer = styled.div`
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  div {
    padding: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors[`brand-blue`]};
  }
`
