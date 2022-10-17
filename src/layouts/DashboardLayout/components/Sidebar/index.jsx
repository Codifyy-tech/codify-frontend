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

import profileIcon from '../../../../assets/profile-icon.svg'

const navData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'https://vanilla.codifyy.tech/assets/images/homeIcon.svg',
  },
  {
    title: 'Perfis',
    path: '/dashboard/profiles',
    icon: profileIcon,
  },
]

const NavMobileLinks = [
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Perfis', path: '/dashboard/profiles' },
]

export function Sidebar() {
  const [isOpen, setOpen] = useState(false)
  const { signOut } = useContext(AuthContext)

  function handleSignOut() {
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

        {isOpen && (
          <NavMobileContainer>
            {NavMobileLinks.map(({ title, path }) => (
              <NavMobileItem key={path} title={title} path={path} />
            ))}
            <NavMobileSignOut title="Sair" onClick={handleSignOut}>
              Sair
            </NavMobileSignOut>
          </NavMobileContainer>
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
