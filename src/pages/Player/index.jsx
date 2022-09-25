import { useEffect, useState, useContext } from 'react'

import { useParams } from 'react-router-dom'
import { Avatar } from '../../components/Avatar'
import { RegularText, TitleText } from '../../components/Typograph'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import { ClassBox } from './components/ClassBox'
import {
  ClassesArea,
  ClassesContainer,
  PlayerArea,
  PlayerContainer,
  PlayerHeader,
  ProfileArea,
  Video,
  VideoArea,
} from './styles'

export function Player() {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const name = user.name.split(' ')

  const token = localStorage.getItem('@Auth:token')
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await api.get(`/class/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      console.log(data)
      setClasses(data.data)
    }

    getCourses()
  }, [id, token])

  return (
    <PlayerContainer>
      <PlayerHeader>
        <TitleText>Trilha Python</TitleText>
        <ProfileArea className="profile-area">
          <RegularText color="base-text" weight="400">
            {`${name[0]} ${name[name.length - 1]}`}
          </RegularText>
          <Avatar letter={user.firstLetter} size="50" fontSize="title-s" />
        </ProfileArea>
      </PlayerHeader>

      <PlayerArea>
        <VideoArea>
          <Video></Video>
        </VideoArea>

        <ClassesArea>
          <form>
            <TitleText fontSize="title-ms">
              Programação da trilha<span>.</span>
            </TitleText>
            <div>
              <ClassesContainer>
                {classes.map((classInfo, index) => {
                  return (
                    <ClassBox
                      key={index}
                      id={classInfo._id}
                      title={classInfo.title}
                      description={classInfo.description}
                      duration={classInfo.duration}
                      url={classInfo.url}
                      watched={classInfo.watched}
                    />
                  )
                })}
              </ClassesContainer>
            </div>
          </form>
        </ClassesArea>
      </PlayerArea>
    </PlayerContainer>
  )
}
