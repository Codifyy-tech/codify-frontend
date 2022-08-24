import { RegularText, TitleText } from '../../../../components/Typograph'
import { ServiceCardContainer, ServiceCardItem } from './styles'

const serviceCardData = [
  {
    title: 'Exercicios e testes técnicos',
    desc: 'Fornecemos materiais gratuitos para que você possa praticar para testes técnicos em processos seletivos.',
  },
  {
    title: 'Exercicios e testes técnicos',
    desc: 'Fornecemos materiais gratuitos para que você possa praticar para testes técnicos em processos seletivos.',
  },
  {
    title: 'Exercicios e testes técnicos',
    desc: 'Fornecemos materiais gratuitos para que você possa praticar para testes técnicos em processos seletivos.',
  },
]

export function ServiceCard() {
  return (
    <ServiceCardContainer>
      {serviceCardData.map((card, index) => {
        return (
          <ServiceCardItem key={index}>
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