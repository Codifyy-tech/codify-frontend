import { TitleText } from '../../components/Typograph'
import { TestContainer, TestHeader, TestBody, ButtonContainer } from './styles'
import { ButtonForm } from '../../components/ButtonForm'
import PassTest from '../../assets/passTest.png'

export function ResultTest({ resultTest }) {
  return (
    <TestContainer>
      <TestHeader>
        <TitleText>Teste Teórico</TitleText>
      </TestHeader>

      <TestBody>
        <img src={PassTest} alt="" />
        <p>{resultTest}</p>
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
