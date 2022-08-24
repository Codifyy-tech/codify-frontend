import { LandingPageContainer } from './styles'
import { Intro } from '../../pages/LandingPage/components/Intro'
import { BrandSection } from './components/BrandSection'
import { BaseSection } from './components/BaseSection'
import { ServiceCard } from './components/ServiceCard'
import { BaseInfo } from './components/BaseInfo'

const InfoSectionData = [
  {
    title: 'O que oferecemos',
    desc: 'Aproveite todos os nossos recursos de maneira gratuita',
    children: <ServiceCard />,
  },
  {
    title: 'Conquiste aquela vaga dos seus sonhos',
    desc: 'Aproveite todos os nossos recursos de maneira gratuita',
    children: <BaseInfo />,
  },
  {
    title: 'Aprenda tecnologias',
    desc: 'Explore trilhas das mais diversas tecnologias',
  },
]

export function LandingPage() {
  return (
    <LandingPageContainer>
      <Intro />
      <BrandSection />

      {InfoSectionData.map((item, index) => {
        return (
          <BaseSection title={item.title} desc={item.desc} key={index}>
            {item.children}
          </BaseSection>
        )
      })}
    </LandingPageContainer>
  )
}
