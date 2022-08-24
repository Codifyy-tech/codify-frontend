import styled from 'styled-components'

export const ServiceCardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.2rem;

  @media (max-width: 1280px) {
    gap: 0.2rem;
  }
`

export const ServiceCardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 21.875rem;
  border-radius: 20px;
  width: 25rem;
  background-color: ${({ theme }) => theme.colors['base-card-service']};
  text-align: center;
  padding: 40px;
  box-shadow: 0px 13px 50px -32px rgb(0 0 0 / 25%);

  > img {
    width: 3.5rem;
    height: 3.5rem;
  }
`
