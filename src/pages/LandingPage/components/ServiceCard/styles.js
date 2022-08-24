import styled from 'styled-components'

export const ServiceCardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`

export const ServiceCardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  height: 300px;
  border-radius: 20px;
  width: 350px;
  background-color: ${({ theme }) => theme.colors['base-background']};
  text-align: center;
  padding: 40px;
  box-shadow: 0px 13px 50px -32px rgb(0 0 0 / 25%);
`