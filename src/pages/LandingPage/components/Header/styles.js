import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-background']};
  padding: 0rem 2rem;

  > div {
    max-width: 79rem;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0px;
  }

  @media (max-width: 1366px) {
    .container {
      padding: 2rem 0rem;
    }
  }
`

export const NavDesktopContainer = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavMobileContainer = styled.ul`
  display: none;

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    text-transform: uppercase;
  }
`
export const MobileButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;

    svg {
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`
