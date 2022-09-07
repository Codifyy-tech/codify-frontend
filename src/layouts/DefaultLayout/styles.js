import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  background-color: white;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
