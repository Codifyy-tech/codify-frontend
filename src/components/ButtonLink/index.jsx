import { Button } from './styles'

export function ButtonLink(props) {
  return (
    <Button
      to={props.path}
      backgroundColor={props.backgroundColor}
      hoverBackgroundColor={props.hoverBackgroundColor}
      textColor={props.textColor}
    >
      {props.children}
    </Button>
  )
}
