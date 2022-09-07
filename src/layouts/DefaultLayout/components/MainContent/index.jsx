import { useContext } from 'react'
import { RegularText } from '../../../../components/Typograph'
import { AuthContext } from '../../../../contexts/AuthContext'
import { Avatar } from '../Avatar'
import { MainContainer, ProfileArea, SearchArea } from './styles'

export function MainContent({ children }) {
  const { user } = useContext(AuthContext)

  const name = user.name.split(' ')

  return (
    <MainContainer>
      <header>
        <SearchArea className="form-area">
          <form>
            <img
              src="https://vanilla.codifyy.tech/assets/images/searchIcon.svg"
              alt="das"
            />
            <input
              className="search--input"
              type="text"
              placeholder="Pesquisar"
              name="search"
            />
          </form>
        </SearchArea>
        <ProfileArea className="profile-area">
          <RegularText color="base-text" weight="400">
            {`${name[0]} ${name[name.length - 1]}`}
          </RegularText>
          <Avatar letter={user.firstLetter} />
        </ProfileArea>
      </header>
      {children}
    </MainContainer>
  )
}
