import { CaretLeft } from 'phosphor-react'
import { useNavigate, useParams } from 'react-router-dom'

import { useEffect, useState, useContext } from 'react'
import ReactPlayer from 'react-player'

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
  const navigate = useNavigate()
  const [classes, setClasses] = useState([])
  const [technology, setTechnology] = useState('')
  const [video, setVideo] = useState('')

  useEffect(() => {
    const getClasses = async () => {
      const { data } = await api.get(`/class/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      setClasses(data.data)
    }

    const getCourseInfo = async () => {
      const { data } = await api.get(`/course/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      setTechnology(data.data.technology.name)
    }

    getClasses()
    getCourseInfo()
  }, [id, token])

  function handleVideo(url, title, author) {
    setVideo({
      url,
      title,
      author,
    })
  }

  function backPage() {
    console.log('oi')
    navigate(-1)
  }

  return (
    <PlayerContainer>
      <PlayerHeader>
        <div onClick={backPage}>
          <CaretLeft size={42} weight="bold" />
        </div>
        <TitleText>{`Trilha ${technology}`}</TitleText>
        <ProfileArea className="profile-area">
          <RegularText color="base-text" weight="400">
            {`${name[0]} ${name[name.length - 1]}`}
          </RegularText>
          <Avatar letter={user.firstLetter} size="50" fontSize="title-s" />
        </ProfileArea>
      </PlayerHeader>

      <PlayerArea>
        <VideoArea>
          <Video>
            <ReactPlayer url={video.url} controls width="100%" height="100%" />
          </Video>

          <div>
            <TitleText fontSize="title-m">{video.title}</TitleText>
          </div>
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
                      author={classInfo.author}
                      description={classInfo.description}
                      duration={classInfo.duration}
                      url={classInfo.url}
                      watched={classInfo.watched}
                      handleVideo={handleVideo}
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
