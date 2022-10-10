import { Button } from './styles'

export function ButtonForm({ children, ...props }) {
  return <Button {...props}>{children}</Button>
}
