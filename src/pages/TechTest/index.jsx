import { CaretLeft, CircleWavyCheck } from 'phosphor-react'
import { useNavigate, useParams } from 'react-router-dom'

import { useEffect, useState, useContext } from 'react'

import { Avatar } from '../../components/Avatar'
import { ReactComponent as Unlocked } from '../../assets/unlocked.svg'
import { ReactComponent as Locked } from '../../assets/locked.svg'
import { RegularText, TitleText } from '../../components/Typograph'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import { TestContainer, TestHeader, ProfileArea, TestBody } from './style'
import { BaseSection } from '../LandingPage/components/BaseSection'
import { TestStructure } from './Components/TestStructure'

export function TechTest() {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const name = user.name.split(' ')

  const token = localStorage.getItem('@Auth:token')
  const navigate = useNavigate()
  const [company, setCompany] = useState({})
  // const [level, setLevel] = useState('')
  const [technologyId, setTechnologyId] = useState('')
  const [theoryTestId, setTheoryTestId] = useState('')
  const [practicalTestId, setPracticalTestId] = useState('')
  const [isPracticalOpen, setIsPracticalOpen] = useState(false)

  const InfoPracticalData = [
    {
      title: 'Teste Técnico',
      desc: 'Pratique seus conhecimentos com questionários e projetos reais utilizados pelas empresas',
    },
  ]
  useEffect(() => {
    const getPracticalTestInfo = async () => {
      const { data } = await api.get(`/practicalTest/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      console.log(data.data)
      setPracticalTestId(data.data._id)
      setTechnologyId(data.data.technology_id._id)
      setCompany(data.data.company)
    }

    const getTheoryTestInfo = async () => {
      const { data } = await api.get(`/list/theoryTest`, {
        params: { technology_id: technologyId, level: 'Intermediário' },
        headers: { Authorization: 'Bearer ' + token },
      })

      setTheoryTestId(data.data[0]._id)
    }

    const getTheoryResultInfo = async () => {
      console.log(theoryTestId)
      const { data } = await api.get(`/theoryTest/approved/${theoryTestId}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      setIsPracticalOpen(data.approved)
    }

    getPracticalTestInfo()
    getTheoryTestInfo()
    getTheoryResultInfo()
  }, [id, technologyId, theoryTestId, token])

  const InfoTest = [
    {
      title: 'Teste Teórico',
      icon: isPracticalOpen ? (
        <CircleWavyCheck size={32} color="#e6b25d" weight="fill" />
      ) : (
        <Unlocked />
      ),
      desc: 'Questionário de perguntas teóricas para avaliar sua competência. Sendo aprovado, você será liberado para o teste prático.',
      type: 0,
    },
    {
      title: 'Teste Prático',
      icon: isPracticalOpen ? <Unlocked /> : <Locked />,
      desc: 'Projeto para colocar seus conhecimentos em prática. Após enviar o desafio, você receberá automaticamente um selo de concluído.',
      type: 1,
    },
  ]

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
          <TitleText>{`${company.name}`}</TitleText>
        </span>
        <ProfileArea className="profile-area">
          <RegularText color="base-text" weight="400">
            {`${name[0]} ${name[name.length - 1]}`}
          </RegularText>
          <Avatar letter={user.firstLetter} size="50" fontSize="title-s" />
        </ProfileArea>
      </TestHeader>

      <TestBody>
        {InfoPracticalData.map((item, index) => {
          return (
            <BaseSection
              animation={item.animation}
              title={item.title}
              desc={item.desc}
              key={index}
            >
              {item.children}
            </BaseSection>
          )
        })}
        <div>
          {InfoTest.map((item, index) => {
            return (
              <TestStructure
                key={index}
                title={item.title}
                icon={item.icon}
                desc={item.desc}
                type={item.type}
                isPracticalOpen={isPracticalOpen}
                theoryTestId={theoryTestId}
                practicalTestId={practicalTestId}
              />
            )
          })}
        </div>
      </TestBody>
    </TestContainer>
  )
}
