import { RegularText, TitleText } from '../../../../components/Typograph'
import {
  DescArea,
  IconsArea,
  ImageArea,
  ProfileCardContainer,
  TextArea,
} from './styles'

import { ReactComponent as Email } from '../../../../assets/email-icon.svg'
import { ReactComponent as Linkedin } from '../../../../assets/linkedin-icon.svg'
import { ReactComponent as Github } from '../../../../assets/github-icon.svg'

export function ProfileCard({ name, image, github, linkedin, email, role }) {
  return (
    <ProfileCardContainer>
      <ImageArea>
        <img src={image} alt="" />
      </ImageArea>
      <DescArea>
        <TextArea>
          <TitleText fontSize="title-ms">
            {name}
            <span>.</span>
          </TitleText>
          <RegularText fontSize="text-s" color="brand-blue" weight="400">
            {role}
          </RegularText>
        </TextArea>

        <IconsArea>
          <a href={email}>
            <Email />
          </a>

          <a href={linkedin}>
            <Linkedin />
          </a>

          <a href={github}>
            <Github />
          </a>
        </IconsArea>
      </DescArea>
    </ProfileCardContainer>
  )
}
