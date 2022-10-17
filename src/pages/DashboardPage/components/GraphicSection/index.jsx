import { useEffect, useState } from 'react'
import { RegularText, TitleText } from '../../../../components/Typograph'
import { api } from '../../../../services/api'
import { MyResponsiveBar } from '../GraphicBar'
import { MyResponsivePie } from '../GraphicPie'
import { GendersContainer, GraphicContainer, UsersContainer } from './styles'

const dataBar = [
  {
    country: 'Javascript',
    Popularidade: 181,
  },
  {
    country: 'React',
    Popularidade: 59,
  },
  {
    country: 'Java',
    Popularidade: 110,
  },
  {
    country: 'Angular',
    Popularidade: 72,
  },
  {
    country: 'Node',
    Popularidade: 100,
  },
  {
    country: 'MySQL',
    Popularidade: 160,
  },
]

export function GraphicBase() {
  const token = localStorage.getItem('@Auth:token')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getInfoPlataform = async () => {
      const { data } = await api.get(`/dashboard`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      setUsers(data)
    }

    getInfoPlataform()
  }, [token])

  console.log(users)

  const dataPie = [
    {
      id: 'Masculino',
      label: 'Masculino',
      value: users.male,
    },
    {
      id: 'Feminino',
      label: 'Feminino',
      value: users.female,
    },
    {
      id: 'Não Binário',
      label: 'Não Binário',
      value: users.non_binary,
    },
  ]

  const qtdUsers = [
    {
      title: 'Masculino',
      value: users.male,
    },
    {
      title: 'Feminino',
      value: users.female,
    },
    {
      title: 'Não binário',
      value: users.non_binary,
    },
    {
      title: 'Não informado',
      value: users.uninformed,
    },
  ]

  return (
    <GraphicContainer>
      <MyResponsiveBar data={dataBar} />
      <div className="bottom-graphics">
        <section>
          <MyResponsivePie data={dataPie} />
        </section>
        <section>
          <UsersContainer>
            <div>
              <TitleText color="base-text" fontSize="title-m" weight="500">
                Usuários totais
              </TitleText>
              <RegularText
                color="brand-blue-dark"
                fontSize="title-lx"
                weight="800"
              >
                {users.total}
              </RegularText>
            </div>
            <GendersContainer>
              {qtdUsers.map((item, index) => {
                return (
                  <div key={index} className={`area${index}`}>
                    <TitleText
                      color="base-text"
                      fontSize="title-s"
                      weight="500"
                    >
                      {item.title}
                    </TitleText>
                    <RegularText
                      color="brand-blue-dark"
                      fontSize="title-m"
                      weight="800"
                    >
                      {item.value}
                    </RegularText>
                  </div>
                )
              })}
            </GendersContainer>
          </UsersContainer>
        </section>
      </div>
    </GraphicContainer>
  )
}
