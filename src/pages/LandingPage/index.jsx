import { LandingPageContainer } from './styles'
import { Intro } from '../../pages/LandingPage/components/Intro'
import { BrandSection } from './components/BrandSection'
import { InfoSection } from './components/InfoSection'
import { ServiceCard } from './components/ServiceCard'

const InfoSectionData = [
  {
    title: 'O que oferecemos',
    desc: 'Aproveite todos os nossos recursos de maneira gratuita',
    children: <ServiceCard />,
  },
  {
    title: 'Conquiste aquela vaga dos seus sonhos',
    desc: 'Aproveite todos os nossos recursos de maneira gratuita',
  },
]

export function LandingPage() {
  return (
    <LandingPageContainer>
      <Intro />
      <BrandSection />

      {InfoSectionData.map((item, index) => {
        return (
          <InfoSection title={item.title} desc={item.desc} key={index}>
            {item.children}
          </InfoSection>
        )
      })}
    </LandingPageContainer>
  )
}
