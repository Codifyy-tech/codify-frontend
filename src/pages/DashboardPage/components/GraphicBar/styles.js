import styled from 'styled-components'

export const GraphicContainer = styled.section`
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 15px;
  height: 590px;
  padding-bottom: 20px;
  width: 90%;

  @media (max-width: 1366px) {
    height: 450px;
  }
`
