import { CheckBoxContainer } from './styles'

export function RadioButton({
  value,
  id,
  handleCheck,
  type,
  questionId,
  answerChosen,
}) {
  const isChecked = answerChosen.find((question) => {
    if (question[questionId] === id) {
      return true
    } else {
      return false
    }
  })

  return (
    <CheckBoxContainer>
      <input
        type="radio"
        id={id}
        name={questionId}
        value={value}
        onChange={(e) => handleCheck(e.target.id, e.target.name)}
        checked={isChecked}
      />
      <label htmlFor={value}> {value} </label>
    </CheckBoxContainer>
  )
}
