import { CaretLeft } from 'phosphor-react'
import { useNavigate, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { TitleText } from '../../components/Typograph'
import { api } from '../../services/api'
import { TestContainer, TestHeader, TestBody } from '../TechTest/style'

export function TheoryTest() {
  const { id } = useParams()

  const token = localStorage.getItem('@Auth:token')
  const navigate = useNavigate()

  const [theoryTest, setTheoryTest] = useState([])

  useEffect(() => {
    const getTestInfo = async () => {
      const { data } = await api.get(`/question/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      setTheoryTest(data.data)
    }

    getTestInfo()
  }, [id, token])

  function backPage() {
    navigate(-1)
  }

  return (
    <TestContainer>
      <TestHeader>
        <div onClick={backPage}>
          <CaretLeft size={42} weight="bold" />
        </div>
        <span>
          <TitleText>Teste Teórico</TitleText>
        </span>
      </TestHeader>

      <TestBody></TestBody>
    </TestContainer>
  )
}
