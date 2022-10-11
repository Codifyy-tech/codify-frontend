import { useNavigate, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { RegularText, TitleText } from '../../components/Typograph'
import { api } from '../../services/api'
import { TestContainer, TestHeader, TestBody } from './style'
import { CheckBox } from './components/CheckBox'

const perguntas = [
  {
    description: 'Selecione todos os conceitos centrais de OOPS',
    answers: [
      {
        _id: '6344263422b0666283981f28',
        description: 'Herança',
      },
      {
        _id: '634426464f9975a0ffc68306',
        description: 'Interface',
      },
      {
        _id: '6344264d4f9975a0ffc6830a',
        description: 'Polimorfismo',
      },
      {
        _id: '6344268f7b69e9cc81f7b753',
        description: 'Abstração',
      },
      {
        _id: '634426a77b69e9cc81f7b757',
        description: 'Genéricos',
      },
    ],
  },
  {
    description: 'Essa é a segunda pergunta java so de exmeplo',
    answers: [
      {
        _id: '6345a80790b1357b7eaf231f',
        description: 'Genéricos',
      },
    ],
  },
]

export function TheoryTest() {
  const { id } = useParams()
  const token = localStorage.getItem('@Auth:token')

  const [questions, setQuestions] = useState([
    {
      answers: ['Carregando', 'Carregando'],
    },
  ])

  useEffect(() => {
    const getTestInfo = async () => {
      const { data } = await api.get(`/question/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      console.log(data.data)
      setQuestions(data.data)
    }

    getTestInfo()
  }, [id, token])

  async function handleCheck(id, type) {
    console.log('oi')
  }

  return (
    <TestContainer>
      <TestHeader>
        <TitleText>Teste Teórico</TitleText>
      </TestHeader>

      <TestBody>
        <TitleText fontSize="title-s">
          <span>1.</span> {perguntas[0].description}
        </TitleText>

        <form action="">
          {questions[0].answers.map((answer) => {
            return (
              <CheckBox
                key={answer._id}
                id={answer._id}
                value={answer.description}
                handleCheck={handleCheck}
              />
            )
          })}
        </form>
      </TestBody>
    </TestContainer>
  )
}
