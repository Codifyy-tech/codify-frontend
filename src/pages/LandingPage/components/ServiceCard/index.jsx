import { RegularText, TitleText } from '../../../../components/Typograph'
import { ServiceCardContainer, ServiceCardItem } from './styles'

import testeIcon from '../../../../assets/test-icon.svg'
import codeIcon from '../../../../assets/code-icon.svg'
import ResumeIcon from '../../../../assets/resume-icon.svg'

const serviceCardData = [
  {
    title: 'Trilhas de aprendizado',
    desc: 'Especialize-se em stacks específicas amplamente utilizadas e valorizadas no mercado de trabalho.',
    icon: codeIcon,
  },
  {
    title: 'Exercícios e testes técnicos',
    desc: 'Fornecemos materiais gratuitos para que você possa praticar para testes técnicos em processos seletivos.',
    icon: testeIcon,
  },
  {
    title: 'Conquiste sua vaga',
    desc: 'Participe ativamente de processos seletivos promovidos mensalmente por nossas empresas parceiras',
    icon: ResumeIcon,
  },
]

export function ServiceCard() {
  return (
    <ServiceCardContainer>
      {serviceCardData.map((card, index) => {
        return (
          <ServiceCardItem key={index}>
            <img src={card.icon} alt="" />
            <TitleText color="base-title" fontSize="title-s">
              {card.title}
            </TitleText>
            <RegularText color="base-text" fontSize="text-m">
              {card.desc}
            </RegularText>
          </ServiceCardItem>
        )
      })}
    </ServiceCardContainer>
  )
}
