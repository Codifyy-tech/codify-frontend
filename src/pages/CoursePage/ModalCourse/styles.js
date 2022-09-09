import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
  background-color: transparent;
  border: none;

  svg {
    color: #686868;
    transition: 0.3s;
    &:hover {
      color: #353535;
    }
  }
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
    display: flex;
    justify-content: center;
    > img {
      width: 40%;
    }
  }
`
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 5rem;
  overflow-y: scroll;
  height: 42vh;
  &::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors[`brand-blue-dark`]};
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors[`scroll-color`]};
    border-radius: 10px;
  }

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

export const InfoContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`
