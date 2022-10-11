import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { TitleText } from '../../components/Typograph'
import { api } from '../../services/api'
import { TestContainer, TestHeader, TestBody, ButtonContainer } from './style'
import { RadioButton } from './components/RadioButton'
import { ButtonForm } from '../../components/ButtonForm'

export function TheoryTest() {
  const { id } = useParams()
  const token = localStorage.getItem('@Auth:token')

  const [questions, setQuestions] = useState([
    {
      answers: ['Carregando', 'Carregando'],
    },
  ])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isFinishQuestion, setIsFinishQuestion] = useState(false)
  const [answerChosen, setAnswerChosen] = useState([])

  useEffect(() => {
    const getTestInfo = async () => {
      const { data } = await api.get(`/question/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      setQuestions(data.data)
    }

    getTestInfo()
  }, [id, token, answerChosen])

  async function handleCheck(answerId, questionId) {
    const exists = answerChosen.every(
      (question) => question[questionId] === undefined,
    )

    if (!exists) {
      const newQuestions = answerChosen.filter((question, index) => {
        console.log(Object.keys(question))
        return Object.keys(question)[0] !== questionId
      })

      setAnswerChosen([...newQuestions, { [questionId]: answerId }])
    } else {
      setAnswerChosen([...answerChosen, { [questionId]: answerId }])
    }
  }

  console.log('resposta:', answerChosen)

  async function nextQuestion() {
    if (currentQuestion === questions.length - 2) {
      setIsFinishQuestion(true)
    }
    if (currentQuestion + 1 === questions.length) {
      console.log('Acabou porra!')
    } else {
      setCurrentQuestion((oldValue) => {
        return (oldValue += 1)
      })
    }
  }

  return (
    <TestContainer>
      <TestHeader>
        <TitleText>Teste Teórico</TitleText>
      </TestHeader>

      <TestBody>
        <TitleText fontSize="title-s">
          <span>{currentQuestion + 1}.</span>{' '}
          {questions[currentQuestion].description}
        </TitleText>

        <form action="">
          {questions[currentQuestion].answers.map((answer) => {
            return (
              <RadioButton
                questionId={questions[currentQuestion]._id}
                key={answer._id}
                id={answer._id}
                value={answer.description}
                handleCheck={handleCheck}
              />
            )
          })}
        </form>
        <ButtonContainer>
          <ButtonForm
            onClick={nextQuestion}
            backgroundColor="brand-blue"
            textColor="base-white"
          >
            {isFinishQuestion ? 'Finalizar Teste' : 'Próxima pergunta'}
          </ButtonForm>
        </ButtonContainer>
      </TestBody>
    </TestContainer>
  )
}
