import styled from 'styled-components'

export const BaseInfoContainer = styled.section`
  display: flex;
  gap: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  > img {
    width: 100%;
  }
`

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 2rem;
  justify-content: center;
`
