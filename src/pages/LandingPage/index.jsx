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
    animation: 'fade-left',
  },
  {
    title: 'Conquiste aquela vaga dos seus sonhos',
    desc: 'Aproveite todos os nossos recursos de maneira gratuita',
    children: <BaseInfo />,
    animation: 'fade-right',
  },
  {
    title: 'Aprenda tecnologias',
    desc: 'Explore trilhas das mais diversas tecnologias',
    animation: 'fade-left',
  },
]

export function LandingPage() {
  return (
    <LandingPageContainer>
      <Intro />
      <BrandSection />

      {InfoSectionData.map((item, index) => {
        return (
          <BaseSection
            animation={item.animation}
            title={item.title}
            desc={item.desc}
            key={index}
          >
            {item.children}
          </BaseSection>
        )
      })}
    </LandingPageContainer>
  )
}
