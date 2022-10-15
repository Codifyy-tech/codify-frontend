import { RegularText, TitleText } from '../../../../components/Typograph'
import { Tag } from '../Tag'
import { TagLevel } from '../Tag/styles'
import { useNavigate } from 'react-router-dom'
import {
  CardDesc,
  CardImage,
  CardTestContainer,
  CardText,
  CardTitle,
  TagContainer,
} from './styles'

export function CardTest({ image, title, description, tag, level, id }) {
  const navigate = useNavigate()

  function handleNavigateToTest() {
    navigate(`/home/test/${id}`, {
      state: {
        title,
      },
    })
  }

  return (
    <CardTestContainer onClick={handleNavigateToTest}>
      <CardImage>
        <img src={image} alt="" />
      </CardImage>

      <CardDesc>
        <div>
          <CardTitle>
            <TitleText fontSize="title-m">{title}</TitleText>
          </CardTitle>
          <CardText>
            <RegularText fontSize="text-m">{description}</RegularText>
          </CardText>
        </div>

        <div>
          <TagContainer>
            <div>
              <Tag nameTag={tag} />
            </div>
            <TagLevel className="tag--level">
              <RegularText fontSize="text-m" color="base-text">
                {level}
              </RegularText>
            </TagLevel>
          </TagContainer>
        </div>
      </CardDesc>
    </CardTestContainer>
  )
}
