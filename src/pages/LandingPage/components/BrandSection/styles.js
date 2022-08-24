import styled from 'styled-components'

export const BrandsSectionContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  align-items: center;
  justify-content: space-evenly;
  justify-items: center;
  img {
    max-width: 10rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
