import { NavLink } from './styles'

export function NavMobileItem({ title, path }) {
  return (
    <li>
      <NavLink href={path}>{title}</NavLink>
    </li>
  )
}
