import styled from 'styled-components'

export const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 3rem;

  > .bottom-graphics {
    display: flex;
    width: 90%;
    height: 500px;
    gap: 4rem;

    rect {
      flex: 1;
    }
  }
`
