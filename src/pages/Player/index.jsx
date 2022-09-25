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
  ProgressArea,
  Video,
  VideoArea,
} from './styles'
import { IconContainer } from '../HomePage/components/CourseCard/styles'
import { ProgressBar } from '../../components/ProgressBar'

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

      const lastClass = data.data.find((classInfo) => !classInfo.watched)
      setVideo({
        id: lastClass._id,
        url: lastClass.url,
        title: lastClass.title,
        author: lastClass.author,
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
    navigate(-1)
  }

  const classWatched = classes.reduce((accumulator, current) => {
    return current.watched ? accumulator + 1 : accumulator
  }, 0)

  const progress = Math.round((classWatched * 100) / classes.length)

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
          <div>
            <Video>
              <ReactPlayer
                url={video.url}
                pip={true}
                controls
                width="100%"
                height="100%"
              />
            </Video>
            <TitleText fontSize="title-m">{video.title}</TitleText>
          </div>

          <ProgressArea>
            <IconContainer>
              <ProgressBar completed={progress} />
            </IconContainer>
          </ProgressArea>
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
                      setClasses={setClasses}
                      lastClass={video.id === classInfo._id}
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
