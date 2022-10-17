import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  padding: 50px 15px;
  height: 100vh;
  gap: 40px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors['base-background']};
    padding: 35px 30px 30px;
    gap: 60px;
    width: 100vw;
    height: 100%;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 60px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 30px;

    > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`

export const DesktopLogo = styled.div`
  max-width: 100%;

  > img {
    width: 100%;
  }
`

export const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1000px) {
    max-width: 50px;
    width: 100%;
    display: flex;
    align-items: center;
  }
`

export const SidebarBody = styled.div`
  display: flex;
  align-items: center;
  height: 70%;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const DesktopNav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: none;
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 0px;
    }
  }
`

export const NavMobileSignOut = styled.nav`
  display: flex;
  max-width: 100%;
  padding: 0.625rem;
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-white']};
    border-radius: 8px;
  }
`

export const ButtonSignOut = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  cursor: pointer;
  border: 0px;
  background-color: transparent;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 30px;
    transition: all 0.3s;

    &:hover {
      background-color: white;
      border-radius: 15px;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`
