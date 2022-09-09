import { RegularText, TitleText } from '../../../../components/Typograph'
import { CardBody, CardHeader, CourseCardContainer } from './styles'
import java from '../../../../assets/java.png'
import { ModalCourse } from '../../ModalCourse'
import { useState } from 'react'

const imagesTech = {
  HTML: 'https://vanilla.codifyy.tech/assets/images/htmlCourseImage.svg',
  Javascript:
    'https://vanilla.codifyy.tech/assets/images/javascriptCourseImage.svg',
  Angular: 'https://vanilla.codifyy.tech/assets/images/angularCourseImage.svg',
  Java: java,
}

export function CourseCard({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleModal() {
    console.log(isModalOpen)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <CourseCardContainer onClick={toggleModal}>
        <CardHeader>
          <img src={imagesTech[course.technology]} alt="" />
        </CardHeader>
        <CardBody>
          <TitleText fontSize="text-m">Trilha {course.tech}</TitleText>
          <RegularText fontSize="text-s">{course.author}</RegularText>
        </CardBody>
      </CourseCardContainer>
      <ModalCourse
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        course={course}
      />
    </>
  )
}
