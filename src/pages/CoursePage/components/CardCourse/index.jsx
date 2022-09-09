import { RegularText, TitleText } from '../../../../components/Typograph'
import { CardBody, CardHeader, CourseCardContainer } from './styles'

const imagesTech = {
  HTML: 'https://vanilla.codifyy.tech/assets/images/htmlCourseImage.svg',
  Javascript:
    'https://vanilla.codifyy.tech/assets/images/javascriptCourseImage.svg',
  Angular: 'https://vanilla.codifyy.tech/assets/images/angularCourseImage.svg',
}

export function CourseCard({ urlImage, tech, author }) {
  return (
    <CourseCardContainer>
      <CardHeader>
        <img src={imagesTech[tech]} alt="" />
      </CardHeader>
      <CardBody>
        <TitleText fontSize="text-m">Trilha {tech}</TitleText>
        <RegularText fontSize="text-s">{author}</RegularText>
      </CardBody>
    </CourseCardContainer>
  )
}
