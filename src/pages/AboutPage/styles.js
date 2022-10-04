import styled from 'styled-components'

export const AboutContainer = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 5rem;

    span {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }
  }
`
