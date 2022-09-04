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
    path: '#',
    type: 'title',
  },
  {
    text: 'História',
    path: '#',
    type: 'paragraph',
  },
  {
    text: 'Sobre',
    path: '#',
    type: 'paragraph',
  },
  {
    text: 'Notícias',
    path: '#',
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
    path: '#',
    type: 'paragraph',
  },
  {
    text: 'Termos e condições',
    path: '#',
    type: 'paragraph',
  },
  {
    text: 'Política de privacidade',
    path: '#',
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
                  <a href={link.path}>
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
                  <a href={link.path}>
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
