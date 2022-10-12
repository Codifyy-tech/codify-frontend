import { RegularText, TitleText } from '../../components/Typograph'
import {
  TestContainer,
  TestHeader,
  TestBody,
  ButtonContainer,
  TextContainer,
} from './styles'
import { ButtonForm } from '../../components/ButtonForm'
import PassTest from '../../assets/passTest.png'
import FailedTest from '../../assets/failtest.png'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function ResultTest({ resultTest }) {
  const { user } = useContext(AuthContext)
  const name = user.name.split(' ')

  const message = {
    true: {
      title: `Parabéns, ${name[0]}!`,
      message: `Você passou no teste com ${resultTest.result}% de acerto. Você fez um trabalho incrível, e estamos muito orgulhosos de você.`,
      image: PassTest,
    },
    false: {
      title: `Não foi dessa vez, ${name[0]}!`,
      message: `Você atingiu ${resultTest.result}% de acerto e não conseguiu passar no teste. Não desamine, estamos torcendo por você`,
      image: FailedTest,
    },
  }

  return (
    <TestContainer>
      <TestHeader>
        <TitleText>Teste Teórico</TitleText>
      </TestHeader>

      <TestBody>
        <img src={message[resultTest.approved].image} alt="imagem-teste" />
        <TextContainer>
          <TitleText>{message[resultTest.approved].title}</TitleText>
          <RegularText color="base-text" weight="600">
            {message[resultTest.approved].message}
          </RegularText>
        </TextContainer>
        <ButtonContainer>
          <ButtonForm
            backgroundColor="brand-blue"
            textColor="base-white"
            hoverBackgroundColor="base-button-hover"
          >
            Ver resultado
          </ButtonForm>
        </ButtonContainer>
      </TestBody>
    </TestContainer>
  )
}
