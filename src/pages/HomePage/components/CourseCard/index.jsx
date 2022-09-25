import { RegularText, TitleText } from '../../../../components/Typograph'
import {
  CardDesc,
  CardImage,
  CardCourseContainer,
  CardText,
  CardTitle,
  Icon,
  IconContainer,
} from './styles'

import PlayIcon from '../../../../assets/play-icon.svg'
import { ProgressBar } from '../../../../components/ProgressBar'
import { useNavigate } from 'react-router-dom'

export function CardCourse({
  image,
  title,
  description,
  color,
  completed,
  id,
}) {
  const navigate = useNavigate()

  function handleNavigateToCourse() {
    navigate(`/home/course/${id}`)
  }

  return (
    <CardCourseContainer onClick={handleNavigateToCourse}>
      <CardImage color={color}>
        <img src={image} alt="" />
      </CardImage>

      <CardDesc>
        <CardTitle>
          <TitleText fontSize="title-ms">{title}</TitleText>
        </CardTitle>
        <CardText>
          <RegularText fontSize="text-s">{description}</RegularText>
        </CardText>

        <IconContainer>
          <ProgressBar completed={completed} />
          <Icon src={PlayIcon} alt="" />
        </IconContainer>
      </CardDesc>
    </CardCourseContainer>
  )
}
