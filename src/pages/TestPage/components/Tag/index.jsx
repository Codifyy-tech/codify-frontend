import { RegularText } from '../../../../components/Typograph'
import { TagContainer } from './styles'

export function Tag({ nameTag }) {
  return (
    <TagContainer nameTag={nameTag}>
      <RegularText fontSize="text-s">{nameTag}</RegularText>
    </TagContainer>
  )
}
