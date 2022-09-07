import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  padding: 50px;
  height: 100vh;
  gap: 60px;

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
