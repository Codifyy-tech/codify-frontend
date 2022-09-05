import { NavLink } from './styles'

export function NavDesktopItem({ title, path }) {
  return (
    <li>
      <NavLink href={path}>{title}</NavLink>
    </li>
  )
}
