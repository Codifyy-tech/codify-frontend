import { RegularText, TitleText } from '../../../../components/Typograph'
import { ReactComponent as PlayIcon } from '../../../../assets/play-icon.svg'
import {
  CardDesc,
  CardImage,
  CardCourseContainer,
  CardText,
  CardTitle,
  IconContainer,
} from './styles'

import { ProgressBar } from '../../../../components/ProgressBar'
import { useNavigate } from 'react-router-dom'

export function CardCourse({
  image,
  title,
  description,
  name,
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
          <TitleText fontSize="title-ms">Trilha {name}</TitleText>
          <CardText>
            <RegularText fontSize="text-s">{title}</RegularText>
          </CardText>
        </CardTitle>

        <IconContainer>
          <ProgressBar completed={completed} />
          <PlayIcon />
        </IconContainer>
      </CardDesc>
    </CardCourseContainer>
  )
}
