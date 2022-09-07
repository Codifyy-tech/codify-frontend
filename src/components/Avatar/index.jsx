import { RegularText } from '../Typograph'
import { AvatarContainer } from './styles'

export function Avatar({ letter, size, fontSize }) {
  return (
    <AvatarContainer size={size}>
      <RegularText fontSize={fontSize}>{letter}</RegularText>
    </AvatarContainer>
  )
}
