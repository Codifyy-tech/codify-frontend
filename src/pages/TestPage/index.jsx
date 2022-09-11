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
    tags: ['Angular', 'Typescript'],
    image: 'https://vanilla.codifyy.tech/assets/images/ibmImage.png',
    level: 'Intermediário',
  },
  {
    title: 'Google',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tags: ['Java', 'Python'],
    image: 'https://vanilla.codifyy.tech/assets/images/googleImage.png',
    level: 'Intermediário',
  },
  {
    title: 'Accenture',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tags: ['Angular', 'Javascript'],
    image: 'https://vanilla.codifyy.tech/assets/images/accentureImage.png',
    level: 'Básico',
  },
  {
    title: 'Microsoft',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tags: ['React', 'Typescript'],
    image: 'https://vanilla.codifyy.tech/assets/images/microsoftImage.png',
    level: 'Avançado',
  },
]

const filterTechData = ['Java', 'Javascript', 'Angular', 'Python']

const filterBusinessData = ['IBM', 'Google', 'Accenture', 'Microsoft']

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
