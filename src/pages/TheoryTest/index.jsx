import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { TitleText } from '../../components/Typograph'
import { api } from '../../services/api'
import { TestContainer, TestHeader, TestBody, ButtonContainer } from './style'
import { RadioButton } from './components/RadioButton'
import { ButtonForm } from '../../components/ButtonForm'
import { ArrowLeft } from 'phosphor-react'
import { toast } from 'react-toastify'

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
        return Object.keys(question)[0] !== questionId
      })

      setAnswerChosen([...newQuestions, { [questionId]: answerId }])
    } else {
      setAnswerChosen([...answerChosen, { [questionId]: answerId }])
    }
  }

  async function nextQuestion() {
    if (currentQuestion + 1 <= answerChosen.length) {
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
    } else {
      toast.error('Selecione uma alternativa', {
        theme: 'colored',
      })
    }
  }

  async function previousQuestion() {
    setIsFinishQuestion(false)
    if (currentQuestion !== 0) {
      setCurrentQuestion((oldValue) => {
        return (oldValue -= 1)
      })
    }
    // setChoice(true)
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
                answerChosen={answerChosen}
              />
            )
          })}
        </form>
        <ButtonContainer>
          <ButtonForm
            backgroundColor="base-white"
            textColor="brand-blue"
            onClick={previousQuestion}
          >
            <ArrowLeft size={22} weight="bold" /> Voltar
          </ButtonForm>
          <ButtonForm
            onClick={nextQuestion}
            backgroundColor="brand-blue"
            textColor="base-white"
            hoverBackgroundColor="base-button-hover"
          >
            {isFinishQuestion ? 'Finalizar Teste' : 'Próxima pergunta'}
          </ButtonForm>
        </ButtonContainer>
      </TestBody>
    </TestContainer>
  )
}
