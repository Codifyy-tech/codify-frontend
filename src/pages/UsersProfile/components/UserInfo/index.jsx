import { CaretLeft } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RegularText, TitleText } from '../../../../components/Typograph'
import { api } from '../../../../services/api'
import {
  CardCourseContainer,
  CardDesc,
  CardImage,
  CardText,
  CardTitle,
  CourseContainer,
  IconContainer,
  ProfileArea,
  UserCardHeader,
  UserContainer,
  UserCourseArea,
  UserInfoArea,
} from './styles'
import { ReactComponent as Ranking } from '../../../../assets/ranking.svg'
import { ProgressBar } from '../../../../components/ProgressBar'

export function UserInfo() {
  const navigate = useNavigate()
  const { id } = useParams()
  const token = localStorage.getItem('@Auth:token')
  const [user, setUser] = useState([])
  const [courses, setCourses] = useState([])
  const [gender, setGender] = useState('')
  const [level, setLevel] = useState([])

  const userInfo = [
    { title: 'nome completo', name: user.name },
    { title: 'gênero', name: gender },
    { title: 'e-mail', name: user.email },
  ]

  const genders = {
    H: 'Masculino',
    M: 'Feminino',
    NB: 'Não binário',
    NI: 'Não informado',
  }

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await api.get(`/dashboard/user/${id}`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      setUser(data.userInfo)
      setLevel(data.level)
      setCourses(data.courses_registered)
      setGender(genders[data.userInfo.genre])
    }

    getUserInfo()
  }, [id, token])

  function backPage() {
    navigate('/dashboard/profiles')
  }

  return (
    <UserContainer>
      <UserCardHeader>
        <div onClick={backPage}>
          <CaretLeft size={42} weight="bold" />
        </div>
        <ProfileArea className="profile-area">
          <RegularText color="base-black" weight="600" fontSize="title-s">
            {user.name}
          </RegularText>
          <Ranking color={level.color} />
        </ProfileArea>
      </UserCardHeader>
      <UserInfoArea>
        {userInfo.map((info, index) => {
          return (
            <div key={index}>
              <RegularText color="base-text" weight="400">
                {info.title}
              </RegularText>
              <RegularText color="base-black" weight="500">
                {info.name}
              </RegularText>
            </div>
          )
        })}
      </UserInfoArea>
      <UserCourseArea>
        <RegularText color="base-text" weight="400">
          Trilhas de {user.name}
        </RegularText>
        <CourseContainer>
          {courses.map((course, index) => {
            return (
              <CardCourseContainer key={index}>
                <CardImage>
                  <img src={course.course_info.technology.icon} alt="imagem" />
                </CardImage>

                <CardDesc>
                  <CardTitle>
                    <TitleText fontSize="title-ms">
                      Trilha {course.course_info.technology.name}
                    </TitleText>
                    <CardText>
                      <RegularText fontSize="text-s">
                        {course.course_info.author}
                      </RegularText>
                    </CardText>
                  </CardTitle>

                  <IconContainer>
                    <ProgressBar completed={course.progress} />
                  </IconContainer>
                </CardDesc>
              </CardCourseContainer>
            )
          })}
        </CourseContainer>
      </UserCourseArea>
    </UserContainer>
  )
}
