import { CheckBoxContainer } from './styles'

export function CheckBox({ value, id, handleCheck, type }) {
  return (
    <CheckBoxContainer>
      <input
        type="checkbox"
        id={id}
        name={value}
        value={value}
        onChange={(e) => handleCheck(e.target.id, type)}
      />
      <label htmlFor={value}> {value} </label>
    </CheckBoxContainer>
  )
}
