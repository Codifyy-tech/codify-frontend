import { RegularText, TitleText } from '../../../../components/Typograph'
import {
  IntroContainer,
  IntroArea,
  IntroDescripton,
  IntroImageContainer,
} from './styles'
import { Button } from '../../../../components/Button'

import introImg from '../../../../assets/intro-image.svg'

const Buttons = [
  {
    title: 'Começar',
    path: '/saibamais',
    backgroundColor: 'base-button',
    hoverBackgroundColor: 'base-button-hover',
    textColor: 'base-white',
  },
]

export function Intro() {
  return (
    <IntroContainer>
      <IntroArea className="container">
        <IntroDescripton>
          <TitleText color="base-title" fontSize="title-l">
            Não perca a oportunidade de trabalhar na empresa dos sonhos
            <span className="circle">.</span>
          </TitleText>

          <RegularText color="base-text" fontSize="text-m">
            Conseguir um emprego não é uma tarefa fácil, especialmente no <br />
            mercado atual. Mas nós estamos aqui para ajudar! Na Codify, você{' '}
            <br />
            estará preparado para esmagar qualquer processo de seleção.
          </RegularText>

          {Buttons.map((button) => (
            <Button
              key={button.path}
              title={button.title}
              path={button.path}
              backgroundColor={button.backgroundColor}
              hoverBackgroundColor={button.hoverBackgroundColor}
              textColor={button.textColor}
            />
          ))}
        </IntroDescripton>

        <IntroImageContainer>
          <img src={introImg} alt="" />
        </IntroImageContainer>
      </IntroArea>
    </IntroContainer>
  )
}
