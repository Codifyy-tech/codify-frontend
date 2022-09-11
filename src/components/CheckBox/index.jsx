import { CheckBoxContainer } from './styles'

export function CheckBox({ value }) {
  return (
    <CheckBoxContainer>
      <input type="checkbox" id={value} name={value} value={value} />
      <label htmlFor={value}> {value} </label>
    </CheckBoxContainer>
  )
}
