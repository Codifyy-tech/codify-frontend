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

export const HeaderInfo = styled.div`
  display: flex;
  padding: 2.5rem;
  gap: 1.3rem;
  justify-content: space-between;
  align-items: center;
`
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
`

export const ButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  position: absolute;
  left: 25%;
  bottom: 0;
  margin-top: 4rem;
  padding-bottom: 2% !important;
  @media (max-width: 768px) {
    padding-top: 2rem !important;
    width: 90%;
    left: 5%;
    margin-top: 1rem !important;
    padding-bottom: 5% !important;
  }
`
