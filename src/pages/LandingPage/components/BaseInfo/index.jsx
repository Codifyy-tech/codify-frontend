import { ButtonLink } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typograph'
import { BaseInfoContainer, DescContainer } from './styles'

const baseInfoData = [
  {
    image: 'https://vanilla.codifyy.tech/assets/images/aboutImage.svg',
    text: [
      'A cada dia, há mais pessoas procurando trabalho, e apenas alguns espaços disponíveis. Isto pode ser frustante, especialmente se você já está procurando há muito ',
      'Não queremos que a frustração atrapalhe o seu sonho. É por isso que a Codify existe: para ajudá-lo a assumir o controle do processo de seleção e garantir aquele emprego dos sonhos!',
    ],
    button: {
      title: 'Começar',
      path: '/saibamais',
      backgroundColor: 'base-button',
      hoverBackgroundColor: 'base-button-hover',
      textColor: 'base-white',
    },
  },
]

export function BaseInfo() {
  return (
    <>
      {baseInfoData.map((item, index) => {
        return (
          <BaseInfoContainer key={index}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <DescContainer>
              {item.text.map((text, index) => {
                return (
                  <RegularText
                    color="base-text"
                    fontSize="text-m"
                    weight="500"
                    key={index}
                  >
                    {text} <br />
                  </RegularText>
                )
              })}

              <ButtonLink
                key={item.button.path}
                title={item.button.title}
                path={item.button.path}
                backgroundColor={item.button.backgroundColor}
                hoverBackgroundColor={item.button.hoverBackgroundColor}
                textColor={item.button.textColor}
              >
                Saiba Mais
              </ButtonLink>
            </DescContainer>
          </BaseInfoContainer>
        )
      })}
    </>
  )
}
