import { BaseSection } from './components/BaseSection'
import { GraphicBase } from './components/GraphicSection'
import { DashboardContainer } from './styles'

const InfoSectionData = [
  {
    title: 'Meu dashboard',
    desc: 'Visualize as trilhas mais acessadas do momento',
    children: <GraphicBase />,
  },
]

export function DashboardPage() {
  return (
    <DashboardContainer>
      {InfoSectionData.map((item, index) => {
        return (
          <BaseSection title={item.title} desc={item.desc} key={index}>
            {item.children}
          </BaseSection>
        )
      })}
    </DashboardContainer>
  )
}
