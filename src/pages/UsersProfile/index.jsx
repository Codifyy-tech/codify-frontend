import { BaseSection } from '../DashboardPage/components/BaseSection'
import { UsersCard } from './components/UsersCard'
import { UsersContainer } from './styles'

const InfoSectionData = [
  {
    title: 'Perfis',
    desc: 'Visualize o progresso dos mais diversos candidatos',
    children: <UsersCard />,
  },
]

export function UsersProfile() {
  return (
    <UsersContainer>
      {InfoSectionData.map((item, index) => {
        return (
          <BaseSection title={item.title} desc={item.desc} key={index}>
            {item.children}
          </BaseSection>
        )
      })}
    </UsersContainer>
  )
}
