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

export function CardCourse({ image, title, description, color, completed }) {
  return (
    <CardCourseContainer>
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
