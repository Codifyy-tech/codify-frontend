import { MyResponsiveBar } from '../GraphicBar'
import { MyResponsivePie } from '../GraphicPie'
import { GraphicContainer } from './styles'

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

export function GraphicBase() {
  return (
    <GraphicContainer>
      <MyResponsiveBar data={dataBar} />
      <div className="bottom-graphics">
        <MyResponsivePie data={dataPie} />
        <MyResponsivePie data={dataPie} />
      </div>
    </GraphicContainer>
  )
}
