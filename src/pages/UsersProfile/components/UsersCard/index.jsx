import { RegularText, TitleText } from '../../../../components/Typograph'
import { ReactComponent as Start } from '../../../../assets/start.svg'
import { ReactComponent as Ranking } from '../../../../assets/ranking.svg'
import {
  CardContainer,
  CardImage,
  CardsContainer,
  InfoContainer,
  UserButton,
  UserInfo,
} from './styles'
import { useState, useEffect } from 'react'
import { ModalUser } from '../ModalUser'

import { api } from '../../../../services/api'

export function UsersCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const token = localStorage.getItem('@Auth:token')

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await api.get(`/user/list`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      setAllUsers(data.list_user)
    }

    getUsers()
  }, [token])

  return (
    <>
      <CardsContainer onClick={toggleModal}>
        {allUsers.map((user) => {
          return (
            <CardContainer key={user._id}>
              <CardImage>
                <TitleText fontSize="title-l" weight="400" color="base-white">
                  {user.first_letter}
                </TitleText>
              </CardImage>

              <InfoContainer>
                <UserInfo>
                  <div>
                    <TitleText fontSize="text-ms" weight="600">
                      {user.name}
                      <span>.</span>
                    </TitleText>
                    <TitleText fontSize="text-s" color="base-text" weight="400">
                      {user.email}
                    </TitleText>
                  </div>
                  <div>
                    <Ranking color={user.rank.color} />
                  </div>
                </UserInfo>

                <UserButton>
                  <div>
                    <RegularText
                      fontSize="text-s"
                      color="base-text"
                      weight="400"
                    >
                      Clique aqui para exibir mais informações
                    </RegularText>
                  </div>
                  <Start />
                </UserButton>
              </InfoContainer>
            </CardContainer>
          )
        })}
      </CardsContainer>

      <ModalUser isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  )
}
