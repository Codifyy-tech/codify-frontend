import { CheckBoxContainer } from './styles'

export function RadioButton({ value, id, handleCheck, type, questionId }) {
  return (
    <CheckBoxContainer>
      <input
        type="radio"
        id={id}
        name={questionId}
        value={value}
        onChange={(e) => handleCheck(e.target.id, e.target.name)}
      />
      <label htmlFor={value}> {value} </label>
    </CheckBoxContainer>
  )
}
