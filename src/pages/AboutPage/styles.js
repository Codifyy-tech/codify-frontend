import styled from 'styled-components'

export const AboutContainer = styled.div`
  padding-top: 2rem;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 5rem;

    > p {
      text-align: justify;
    }

    span {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }
  }
`

export const ProfileArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  padding-top: 4rem;
`
