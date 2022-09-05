import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin-top: 6.25rem;
  background-color: ${({ theme }) => theme.colors['base-background']};
  padding-bottom: 1rem;

  > div {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 3.25rem;
  }

  @media (max-width: 768px) {
    > div {
      flex-direction: column;
      gap: 40px;
    }
  }
`

export const LogoSideContainer = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const LinkSideContainer = styled.div`
  display: flex;
  gap: 6.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    text-align: center;
  }
`

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.3rem;
  width: 100%;
  text-align: center;
`
