import { Clipboard } from 'phosphor-react'
import { RegularText, TitleText } from '../../../../components/Typograph'
import { InfoContainer, TitleContainer } from './styles'

export function InfoSection({ title, desc, children }) {
  return (
    <InfoContainer className="container">
      <TitleContainer>
        <TitleText color="base-title" fontSize="title-l">
          {title}
          <span className="circle">.</span>
        </TitleText>
        <RegularText color="base-text" fontSize="text-m">
          <strong>{desc}</strong>
          <span className="circle">.</span>
        </RegularText>
      </TitleContainer>

      {children}
    </InfoContainer>
  )
}