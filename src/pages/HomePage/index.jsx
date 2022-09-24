import { useEffect, useState, useContext } from 'react'

import { RegularText, TitleText } from '../../components/Typograph'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'
import { splitName } from '../../utils/splitName'
import { CardCourse } from './components/CourseCard'
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

      console.log(data.courses_registered)
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
            RegularText Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry standard
            dummy text ever since the 1500s, when
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
        <CourseCardArea>
          {courses.map((card, index) => {
            return (
              <CardCourse
                key={index}
                title={card.course_info.title}
                description={card.course_info.description}
                image={card.course_info.technology.icon}
                completed={card.progress}
              />
            )
          })}
        </CourseCardArea>
      </CoursesArea>
    </HomeContainer>
  )
}
