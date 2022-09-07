import Hamburger from 'hamburger-react'
import { SignOut } from 'phosphor-react'
import { useContext, useState } from 'react'
import { RegularText } from '../../../../components/Typograph'
import { AuthContext } from '../../../../contexts/AuthContext'
import { NavMobileItem } from '../../../../pages/LandingPage/components/Header/components/NavMobileItem'
import { NavMobileContainer } from '../../../../pages/LandingPage/components/Header/styles'
import { NavItem } from '../NavItem'
import {
  ButtonSignOut,
  DesktopLogo,
  DesktopNav,
  MobileIcon,
  NavMobileSignOut,
  SidebarBody,
  SidebarContainer,
  SidebarHeader,
} from './styles'

const navData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: 'https://vanilla.codifyy.tech/assets/images/homeIcon.svg',
  },
  {
    title: 'Trilhas',
    path: '/course',
    icon: 'https://vanilla.codifyy.tech/assets/images/courseIcon.svg',
  },
  {
    title: 'Testes Técnicos',
    path: '/home',
    icon: 'https://vanilla.codifyy.tech/assets/images/techtasksIcon.svg',
  },
  {
    title: 'Configurações',
    path: '/home/profile',
    icon: 'https://vanilla.codifyy.tech/assets/images/settingIcon.svg',
  },
]

const NavMobileLinks = [
  { title: 'Inicio', path: '/home' },
  { title: 'Trilhas', path: '/sobre' },
  { title: 'Testes', path: '/contato' },
  { title: 'Configurações', path: '/home/profile' },
]

export function Sidebar() {
  const [isOpen, setOpen] = useState(false)
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
    console.log('oi')
    signOut()
  }

  return (
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
            <NavMobileSignOut title="Sair" onClick={handleSignOut}>
              Sair
            </NavMobileSignOut>
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
      <ButtonSignOut onClick={handleSignOut}>
        <div>
          <SignOut size={20} color="#686868" />
          <RegularText fontSize="text-m" weight="500" color="base-text">
            Sair
          </RegularText>
        </div>
      </ButtonSignOut>
    </SidebarContainer>
  )
}
