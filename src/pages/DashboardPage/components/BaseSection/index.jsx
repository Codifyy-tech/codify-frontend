import { RegularText, TitleText } from '../../../../components/Typograph'
import { BaseSectionContainer, TitleContainer } from './styles'

export function BaseSection({ title, desc, children, animation }) {
  return (
    <BaseSectionContainer data-aos={animation} className="container">
      <TitleContainer>
        <TitleText color="base-title" fontSize="title-l">
          {title}
          <span className="circle">.</span>
        </TitleText>
        <RegularText color="base-text" fontSize="text-m" weight="500">
          {desc}
          <span className="circle">.</span>
        </RegularText>
      </TitleContainer>

      {children}
    </BaseSectionContainer>
  )
}
