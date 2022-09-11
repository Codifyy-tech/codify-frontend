import { RegularText, TitleText } from '../../../../components/Typograph'
import { Tag } from '../Tag'
import { TagLevel } from '../Tag/styles'
import {
  CardDesc,
  CardImage,
  CardTestContainer,
  CardText,
  CardTitle,
  TagContainer,
} from './styles'

export function CardTest({ image, title, description, tags, level }) {
  return (
    <CardTestContainer>
      <CardImage>
        <img src={image} alt="" />
      </CardImage>

      <CardDesc>
        <CardTitle>
          <TitleText fontSize="title-m">{title}</TitleText>
        </CardTitle>
        <CardText>
          <RegularText fontSize="text-m">{description}</RegularText>
        </CardText>

        <div>
          <TagContainer>
            <div>
              {tags.map((nameTag, index) => {
                return <Tag key={index} nameTag={nameTag} />
              })}
            </div>
            <TagLevel className="tag--level">
              <RegularText fontSize="text-m">{level}</RegularText>
            </TagLevel>
          </TagContainer>
        </div>
      </CardDesc>
    </CardTestContainer>
  )
}
