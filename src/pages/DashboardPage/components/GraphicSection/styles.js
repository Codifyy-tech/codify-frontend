import styled from 'styled-components'

export const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 3rem;

  > .bottom-graphics {
    display: flex;
    width: 100%;
    gap: 2rem;
  }

  section {
    display: flex;
    width: 100%;
    height: 450px;
  }

  @media (max-width: 768px) {
    section {
      height: 400px;
    }

    .bottom-graphics {
      flex-direction: column;
    }
  }
`

export const UsersContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const GendersContainer = styled.div`
  display: grid !important;
  padding: 0rem !important;
  grid-template-areas:
    'male female'
    'nonbinary  nonbinary';

  > div {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .area0 {
    grid-area: male;
    border-top: 0.1px solid #d1d1d1;
    border-right: 0.1px solid #d1d1d1;
    border-bottom: 0.1px solid #d1d1d1;
  }
  .area1 {
    grid-area: female;
    border-top: 0.1px solid #d1d1d1;
    border-left: 0.1px solid #d1d1d1;
    border-bottom: 0.1px solid #d1d1d1;
  }
  .area2 {
    grid-area: nonbinary;
  }
`
