import { useEffect, useState, useContext } from 'react'

import { RegularText, TitleText } from '../../components/Typograph'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import { splitName } from '../../utils/splitName'
import { CardCourse } from './components/CourseCard'
import { EmptyCourse } from './EmpytCourse'
import {
  BannerContainer,
  BannerDesc,
  BannerImage,
  HomeContainer,
  CoursesArea,
  CourseCardArea,
} from './styles'

export function HomePage() {
  const { user } = useContext(AuthContext)
  const name = splitName(user.name)

  const token = localStorage.getItem('@Auth:token')
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await api.get('/info', {
        headers: { Authorization: 'Bearer ' + token },
      })

      setCourses(data.courses_registered)
    }

    getCourses()
  }, [token])

  return (
    <HomeContainer>
      <BannerContainer>
        <BannerDesc>
          <TitleText as="h2" color="base-white" fontSize="title-l">
            Olá, {name[0]}!
          </TitleText>
          <RegularText color="base-white" fontSize="text-m" weight="500">
            Estamos aqui para ajudá-lo a desenvolver sua carreira. Reunimos uma
            ampla gama de cursos de tecnologias utilizadas e valorizadas no
            mercado de trabalho. Aproveite!
          </RegularText>
        </BannerDesc>
        <BannerImage>
          <img
            src="https://vanilla.codifyy.tech/assets/images/bannerHomeImage.png"
            alt=""
          />
        </BannerImage>
      </BannerContainer>

      <CoursesArea>
        <RegularText fontSize="text-m" weight="500">
          Minhas Trilhas
        </RegularText>
        {courses.length ? (
          <CourseCardArea>
            {courses.map((card, index) => {
              return (
                <CardCourse
                  key={index}
                  id={card.course_info._id}
                  title={card.course_info.title}
                  description={card.course_info.description}
                  name={card.course_info.technology.name}
                  image={card.course_info.technology.icon}
                  completed={card.progress}
                />
              )
            })}
          </CourseCardArea>
        ) : (
          <EmptyCourse />
        )}
      </CoursesArea>
    </HomeContainer>
  )
}
