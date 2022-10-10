import { CheckBoxContainer } from './styles'

export function CheckBox({ value, id, handleCheck }) {
  return (
    <CheckBoxContainer>
      <input
        type="checkbox"
        id={id}
        name={value}
        value={value}
        onChange={(e) => handleCheck(e.target.id)}
      />
      <label htmlFor={value}> {value} </label>
    </CheckBoxContainer>
  )
}
