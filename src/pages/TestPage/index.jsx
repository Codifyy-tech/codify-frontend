import { CheckBox } from '../../components/CheckBox'
import { RegularText, TitleText } from '../../components/Typograph'
import { CardTest } from './components/CardTest'
import {
  ButtonArea,
  CheckBoxContainer,
  FilterArea,
  TestArea,
  TestContainer,
} from './styles'

const cardData = [
  {
    title: 'IBM',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tags: ['Typescript'],
    image: 'https://vanilla.codifyy.tech/assets/images/ibmImage.png',
    level: 'Intermediário',
  },
  {
    title: 'FIAP',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tags: ['Python'],
    image:
      'https://s3-alpha-sig.figma.com/img/c0c9/eeae/6f5471d9d6ffd6c23427a5d5a97bd3ab?Expires=1665964800&Signature=YRF~PY7t7BCZtklI-1lywtf937ZZN9GLKG1F7Il2JnXclGnGvmgTUC-Q5RDu7A7dWH-ePRG9KBTQxx-e1FgUZUOa9ypgJJn2Bp2qwCKhDEIwOa4NZN3EuanJXsxPb~T39ctq6erK6tigGPkIBz3IIqZbNcUdaTTlfPEvlTyzvGQdNmgcUMzx1G0x15w-kXcW4vi2EQdK9yiSuAkKCS8L9UW19HcfkcCe4vIVmS~wPFvePdrmWuJPHLXGmM-46BYFTopfHglVgYOK5dYnUVay6tPng9VEi0uhCZ0rvuzCImLTviLz8As6ZQOYWqrYLQR0CbE2FEGYaO6s9cTBV-6W0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    level: 'Intermediário',
  },
  {
    title: 'Alura',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tags: ['Angular'],
    image:
      'https://s3-alpha-sig.figma.com/img/5178/9e58/dc5d3a1e726d9cae55676bcd9eda1e42?Expires=1665964800&Signature=OqTlqqgGU-86HMWjg-aiqawbVfrACgAc-nQwv9Z~fIQMc6MMGCz8q91McvBoM~-j3KI2en4ihHQRrMbstxyEdzNTSLEwuIk0idGopctmQnh5gwF6Ue9SBuLpqIaLoNhDpK~HjTu9Cw0FjaS-ovQM6c3RPNQTdOgfmn-jIy87w7KnvVr2m~Jg76rXWFHcU06OxrQYx~lbOP1D3c~jzie~Zw4jtRmtyG58i3aSBMYpIVd0nxwu7TBeqO6rtHVoVyJrggPVtpbRFz7RA7QX-ZcAfchvMxuQqQ8QFZ6NOGSOZ3O2h8V46-LyvuCOCR9SLSNrnOv~ArjCrTur3S2fSzNpgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    level: 'Básico',
  },
]

const filterTechData = ['Java', 'Javascript', 'Angular', 'Python']

const filterBusinessData = ['IBM', 'FIAP', 'Alura']

export function TestPage() {
  return (
    <TestContainer>
      <TestArea>
        {cardData.map((card, index) => {
          return (
            <CardTest
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              tags={card.tags}
              level={card.level}
            />
          )
        })}
      </TestArea>

      <FilterArea>
        <form>
          <TitleText>
            Filtros<span>.</span>
          </TitleText>
          <TitleText fontSize="title-s">
            Tecnologias<span>.</span>
          </TitleText>
          <div>
            <CheckBoxContainer>
              {filterTechData.map((value, index) => {
                return <CheckBox key={index} value={value} />
              })}
            </CheckBoxContainer>
          </div>

          <TitleText fontSize="title-s">
            Empresa<span>.</span>
          </TitleText>
          <div>
            <CheckBoxContainer>
              {filterBusinessData.map((value, index) => {
                return <CheckBox key={index} value={value} />
              })}
            </CheckBoxContainer>
          </div>

          <ButtonArea className="button-area">
            <button className="apply-filter">
              <RegularText fontSize="text-s">Aplicar Filtros</RegularText>
            </button>
            <button className="reset-filter" type="reset">
              <RegularText fontSize="text-s">Resetar Filtros</RegularText>
            </button>
          </ButtonArea>
        </form>
      </FilterArea>
    </TestContainer>
  )
}
