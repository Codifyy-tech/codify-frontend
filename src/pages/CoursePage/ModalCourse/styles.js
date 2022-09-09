import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 17rem;
  background-color: ${({ color }) => color};

  div {
    width: 23rem;
    > img {
      width: 100%;
    }
  }
`
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 5rem;

  span {
    color: ${({ theme }) => theme.colors[`brand-blue`]};
  }
`

export const DescCourse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContentCourse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TopicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 15rem);
  gap: 0.5rem;
`
