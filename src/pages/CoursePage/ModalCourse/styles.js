import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  height: 100%;
  padding-bottom: 1%;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
  background-color: transparent;
  border: none;

  svg {
    color: #353535;

  }

  @media (max-width: 768px) {
    top: 6%;
    right: 10%;
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
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
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

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    height: 50vh;
    &::-webkit-scrollbar {
      width: 0rem;
    }
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const ButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 4rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding-top: 2rem !important;
    width: 90%;
    margin-top: 1rem !important;
    padding-bottom: 2% !important;
  }
`
