// import { Outlet } from 'react-router-dom'

import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { NavMobileItem } from '../../pages/LandingPage/components/Header/components/NavMobileItem'
import { NavMobileContainer } from '../../pages/LandingPage/components/Header/styles'
import { NavItem } from './components/NavItem'
import {
  DesktopLogo,
  DesktopNav,
  LayoutContainer,
  MainContainer,
  MobileIcon,
  SidebarBody,
  SidebarContainer,
  SidebarHeader,
} from './style'

const navData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: 'https://vanilla.codifyy.tech/assets/images/homeIcon.svg',
  },
  {
    title: 'Trilhas',
    path: '/home',
    icon: 'https://vanilla.codifyy.tech/assets/images/courseIcon.svg',
  },
  {
    title: 'Testes Técnicos',
    path: '/home',
    icon: 'https://vanilla.codifyy.tech/assets/images/techtasksIcon.svg',
  },
  {
    title: 'Configurações',
    path: '/home',
    icon: 'https://vanilla.codifyy.tech/assets/images/settingIcon.svg',
  },
]

const NavMobileLinks = [
  { title: 'Home', path: '/home' },
  { title: 'Sobre', path: '/sobre' },
  { title: 'Contato', path: '/contato' },
  { title: 'Entrar', path: '/login' },
  { title: 'Cadastrar', path: '/register' },
]

export function DefaultLayout() {
  const [isOpen, setOpen] = useState(false)

  return (
    <LayoutContainer>
      <SidebarContainer>
        <SidebarHeader>
          <div>
            <DesktopLogo>
              <a href="/">
                <img
                  src="https://vanilla.codifyy.tech/assets/images/logo.svg"
                  alt=""
                />
              </a>
            </DesktopLogo>

            <MobileIcon className="menu-icon">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </MobileIcon>
          </div>

          {isOpen ? (
            <NavMobileContainer>
              {NavMobileLinks.map(({ title, path }) => (
                <NavMobileItem key={path} title={title} path={path} />
              ))}
            </NavMobileContainer>
          ) : (
            ''
          )}
        </SidebarHeader>

        <SidebarBody>
          <DesktopNav>
            <ul>
              {navData.map((item, index) => {
                return (
                  <NavItem
                    key={index}
                    title={item.title}
                    path={item.path}
                    icon={item.icon}
                  />
                )
              })}
            </ul>
          </DesktopNav>
        </SidebarBody>
      </SidebarContainer>
      <MainContainer>oi</MainContainer>
    </LayoutContainer>
  )
}
