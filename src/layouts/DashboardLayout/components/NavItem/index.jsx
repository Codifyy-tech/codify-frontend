import { RegularText } from '../../../../components/Typograph'
import { NavItemContainer, NavItemIcon } from './styles'

export function NavItem({ title, path, icon }) {
  return (
    <NavItemContainer>
      <a href={path}>
        <NavItemIcon className="menu--icon">
          <img src={icon} alt="p" />
        </NavItemIcon>
        <RegularText fontSize="text-m" weight="500">
          {title}
        </RegularText>
      </a>
    </NavItemContainer>
  )
}
