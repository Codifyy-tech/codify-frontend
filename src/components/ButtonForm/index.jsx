import { Button } from './styles'

export function ButtonForm(props) {
  return (
    <Button
      type="submit"
      backgroundColor={props.backgroundColor}
      hoverBackgroundColor={props.hoverBackgroundColor}
      textColor={props.textColor}
    >
      {props.children}
    </Button>
  )
}
