import { RegularText, TitleText } from '../../../../components/Typograph'
import { CardBody, CardHeader, CourseCardContainer } from './styles'
import { ModalCourse } from '../../ModalCourse'
import { useState } from 'react'

export function CourseCard({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleModal() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <CourseCardContainer onClick={toggleModal}>
        <CardHeader color={course.technology.color}>
          <img src={course.technology.icon} alt="" />
        </CardHeader>
        <CardBody>
          <TitleText fontSize="text-m">
            Trilha {course.technology.name}
          </TitleText>
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
