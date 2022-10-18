import {
  FooterContainer,
  LogoSideContainer,
  LinkSideContainer,
  LinksList,
  AuthorContainer,
} from './styles'

import codifyLogoImg from '../../../../assets/codify-logo.svg'
import { TitleText, RegularText } from '../../../../components/Typograph'

const contatoList = [
  {
    text: 'Contato',
    path: '/sobre',
    type: 'title',
  },
  {
    text: 'História',
    path: '/sobre',
    type: 'paragraph',
  },
  {
    text: 'Sobre',
    path: '/sobre',
    type: 'paragraph',
  },
  {
    text: 'Youtube',
    path: 'https://www.youtube.com/channel/UCGAthpbMZFj-ZN_J364kkvw',
    type: 'paragraph',
  },
]

const InfoList = [
  {
    text: 'Informações',
    path: '#',
    type: 'title',
  },
  {
    text: 'Contato',
    path: 'mailto:suportecodifyy@gmail.com?',
    type: 'paragraph',
  },

]

export function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <LogoSideContainer>
          <img src={codifyLogoImg} alt="" />
        </LogoSideContainer>

        <LinkSideContainer>
          <LinksList>
            {contatoList.map((link) => {
              if (link.type === 'title') {
                return (
                  <TitleText fontSize="title-s" color="brand-blue-dark">
                    {link.text}
                  </TitleText>
                )
              } else {
                return (
                  <a href={link.path} target="_blank" rel="noreferrer">
                    <RegularText fontSize="text-m" weight={500}>
                      {link.text}
                    </RegularText>
                  </a>
                )
              }
            })}
          </LinksList>

          <LinksList>
            {InfoList.map((link) => {
              if (link.type === 'title') {
                return (
                  <TitleText fontSize="title-s" color="brand-blue-dark">
                    {link.text}
                  </TitleText>
                )
              } else {
                return (
                  <a href={link.path} target="_blank" rel="noreferrer">
                    <RegularText fontSize="text-m" weight={500}>
                      {link.text}
                    </RegularText>
                  </a>
                )
              }
            })}
          </LinksList>
        </LinkSideContainer>
      </div>
      <AuthorContainer>
        <RegularText fontSize="text-m" weight={500} color="base-text">
          powered by TOPA
        </RegularText>
      </AuthorContainer>
    </FooterContainer>
  )
}
