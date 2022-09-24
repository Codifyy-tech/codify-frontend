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

export function CardCourse({ image, title, description, color }) {
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
          <Icon src={PlayIcon} alt="" />
        </IconContainer>
      </CardDesc>
    </CardCourseContainer>
  )
}
