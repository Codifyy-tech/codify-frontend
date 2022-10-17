import { Books } from 'phosphor-react'
import { RegularText } from '../../../components/Typograph'
import { EmptyCourseContainer } from './styles'

export function EmptyCourse() {
  return (
    <EmptyCourseContainer>
      <div>
        <Books size={130} color="#368FFC" />
        <RegularText color="base-text" weight="500">
          Você não está cadastrado em nenhuma trilha
        </RegularText>
        <RegularText color="base-text" weight="500">
          Para se inscrever, acesse a{' '}
          <a href="/home/course"> página de trilhas</a> no menu
        </RegularText>
      </div>
    </EmptyCourseContainer>
  )
}
