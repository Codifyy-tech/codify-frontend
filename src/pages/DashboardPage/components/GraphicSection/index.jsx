import { RegularText, TitleText } from '../../../../components/Typograph'
import { MyResponsiveBar } from '../GraphicBar'
import { MyResponsivePie } from '../GraphicPie'
import { GendersContainer, GraphicContainer, UsersContainer } from './styles'

const dataBar = [
  {
    country: 'Javascript',
    Popularidade: 181,
  },
  {
    country: 'React',
    Popularidade: 59,
  },
  {
    country: 'Java',
    Popularidade: 110,
  },
  {
    country: 'Angular',
    Popularidade: 72,
  },
  {
    country: 'Node',
    Popularidade: 100,
  },
  {
    country: 'MySQL',
    Popularidade: 160,
  },
]

const dataPie = [
  {
    id: 'Masculino',
    label: 'Masculino',
    value: 135,
  },
  {
    id: 'Feminino',
    label: 'Feminino',
    value: 563,
  },
  {
    id: 'Não Binário',
    label: 'Não Binário',
    value: 283,
  },
]

const qtdUsers = [
  {
    title: 'Masculino',
    value: 100,
  },
  {
    title: 'Feminino',
    value: 50,
  },
  {
    title: 'Não binário',
    value: 40,
  },
]

export function GraphicBase() {
  return (
    <GraphicContainer>
      <MyResponsiveBar data={dataBar} />
      <div className="bottom-graphics">
        <section>
          <MyResponsivePie data={dataPie} />
        </section>
        <section>
          <UsersContainer>
            <div>
              <TitleText color="base-text" fontSize="title-m" weight="500">
                Usuários totais
              </TitleText>
              <RegularText
                color="brand-blue-dark"
                fontSize="title-lx"
                weight="800"
              >
                180
              </RegularText>
            </div>
            <GendersContainer>
              {qtdUsers.map((item, index) => {
                return (
                  <div key={index} className={`area${index}`}>
                    <TitleText
                      color="base-text"
                      fontSize="title-s"
                      weight="500"
                    >
                      {item.title}
                    </TitleText>
                    <RegularText
                      color="brand-blue-dark"
                      fontSize="title-m"
                      weight="800"
                    >
                      {item.value}
                    </RegularText>
                  </div>
                )
              })}
            </GendersContainer>
          </UsersContainer>
        </section>
      </div>
    </GraphicContainer>
  )
}
