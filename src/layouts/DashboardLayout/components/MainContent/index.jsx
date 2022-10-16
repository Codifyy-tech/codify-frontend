import { useContext } from 'react'
import { RegularText } from '../../../../components/Typograph'
import { AuthContext } from '../../../../contexts/AuthContext'
import { Avatar } from '../../../../components/Avatar'
import { MainContainer, ProfileArea } from './styles'

export function MainContent({ children }) {
  const { user } = useContext(AuthContext)

  const name = user.name.split(' ')

  return (
    <MainContainer>
      <header>
        <ProfileArea className="profile-area">
          <RegularText color="base-text" weight="400">
            {`${name[0]} ${name[name.length - 1]}`}
          </RegularText>
          <Avatar letter={user.firstLetter} size="50" fontSize="title-s" />
        </ProfileArea>
      </header>
      {children}
    </MainContainer>
  )
}
