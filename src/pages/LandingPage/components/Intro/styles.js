import styled from 'styled-components'

export const IntroContainer = styled.section`
  background-color: ${({ theme }) => theme.colors['base-background']};
  padding-bottom: 6rem;
`

export const IntroArea = styled.div`
  display: flex;
  padding: 6.25rem 2rem 5rem;

  @media (max-width: 990px) {
    flex-direction: column;
    padding: 3rem 2rem 10rem;
  }
`

export const IntroDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  margin-top: 2rem;
`

export const IntroImageContainer = styled.div`
  flex: 1;

  > img {
    width: 35rem;
    position: absolute;
    right: 0;
  }

  @media (max-width: 990px) {
    display: none;
  }
`
