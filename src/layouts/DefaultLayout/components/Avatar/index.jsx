import { RegularText } from '../../../../components/Typograph'
import { AvatarContainer } from './styles'

export function Avatar({ letter }) {
  return (
    <AvatarContainer>
      <RegularText fontSize="title-s">{letter}</RegularText>
    </AvatarContainer>
  )
}
