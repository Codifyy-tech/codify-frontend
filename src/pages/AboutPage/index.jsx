import { RegularText, TitleText } from '../../components/Typograph'
import { ProfileCard } from './components/ProfileCard'
import { AboutContainer, ProfileArea } from './styles'

const profilesData = [
  {
    name: 'Cláudio Roberto',
    image:
      'https://s3-alpha-sig.figma.com/img/a5b6/657d/3c39dfa94d86a61c9423cca6de18b373?Expires=1665964800&Signature=KLGZX9WS4F6NrbYMW6g3LSyX2WIvDWHVHyN4tXT8xHoTQFd7Hc2oXTC5q-vRNx6dcKdTa0ouoo1efGRFEVosZaNH2~1PdR2Vg0-oL3xvZGVk4pNjPdFrsxCh-pOSHSXShlzLeSHQk3UA0TbVpexgPfma9YAdb4IrCxkSMSMfAWfoBznuTe0Z2EluCwVvzsi-tbz~zpmmPbxvXflW1FfxOhri429HFcghfdnwQ4ngI84zen~RFjycyrj~9~eXqhbjTBHpB1xPHeZSnG~Ts902ILq2ImoObNMwEAD~zES6pP8hwhdPzf3~yvENOWtPxK3AmpnEApQ9mVMdQLnby8dJMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    role: 'desenvolvedor back-end',
    email: 'mailto:oliveirclau@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/claudiorobertooliveira-10962b102/',
    github: 'https://github.com/Oliveirclau',
  },
  {
    name: 'David Augusto',
    image:
      'https://s3-alpha-sig.figma.com/img/8e0d/7ce1/b3e7e3b4f3604832f5c79d7e1198a3a4?Expires=1665964800&Signature=hiJ2V6PL-WPO1pGnWdvivwjJYLE7-ygUKCiJjitN7k6bR7LVOHv2BnBVU0TCN9Aa6uWmuu~Glg3f~0kIxOvaZZN7kKhY4f4uNMzqZWsoMb-WKrFhRfB7f3QfE3PEWSwKl~6t4xYvl8jjAkyDpUoh-Y8tpTUXIne4EJevQA9J7edctwN4WP7qLKIQ5eRVDgylpsQ4bpvsI2E0rV4RhIr1~gVTows5yEI08mU4QsV0AfXE0v-SYbl8uOPyPaz09N25Be4BeFaVRBaai-nVCijaB0VmCQMsOdeP-zmSQ~zwLxZzdYRbm15RFBTcZAkBWW7XFXP8U6j9~FoiXQjczNt0Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    role: 'desenvolvedor full-stack',
    email: 'mailto:davidribeiro086@gmail.com',
    linkedin: 'https://www.linkedin.com/in/davidaugustoo/',
    github: 'https://github.com/davidaugustoo',
  },
  {
    name: 'Lucas Amadeu',
    image:
      'https://s3-alpha-sig.figma.com/img/97de/9611/013f849fbb0cbeb64cad38dbc44183bd?Expires=1665964800&Signature=SKYd7j7JWclf7CwBberRcibBhI0NojGn5YHXlJek1pdROkKWxsnhe1Rd8BFwEarHbkeNUApqXIlwm2A38c54~TOXMrFuuWviNFp1YPuiU3hTR1s5wkE1RhwnhHNkbWh9~O58Tfij5zkJHr0d9hoiKFZx8GatHejGVPZcUJu4DMpGJ6x8jZ5R5JPbPavJZA80Q~5JOYLbBydazESFY715QZOuBACnBrMMpw15xqeX3-WekyLnT3G3Fy5qESQN0WOBFFTnYwSbv02AlliyfnR~i4YXtIHjUjB66UCa5ZpWLv3nq6ltcMvdXCKzsGSbrBO7RWKmGI~AkCXOysgFoDSBTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    role: 'desenvolvedor front-end',
    email: 'mailto:lucas.amadeu.soares@gmail.com',
    linkedin: 'https://www.linkedin.com/in/lucas-amadeuu/',
    github: 'https://github.com/lucasamadeuu',
  },
  {
    name: 'Rafael Mafort',
    image:
      'https://s3-alpha-sig.figma.com/img/7fb5/dcde/12e64e35826bd385a1c43e1bad792973?Expires=1665964800&Signature=R3IQX0XDsyMSYnc2WWw8ut8ZSiEPKQ0Ax~G32krzUOKdP0d10LAEXE0dDsXKX74VaqohIsMgaFzJ8nfW21qZiukFq0ZiE1gJP-nCKhFhAnlQLw-5FeuIMvyF0bpTPqTEi0vFaUbmy6Ly-6Uyo9rLsmC90W66ZPrIH4CoZ4yg9qQbzwazBloXo7eZ7IlMyyP1MHvXD9bE0o3B1UdWV7vl6vGH5wZlyl-hjH3MCBbpdsWH03ildPoiooz9jVwAtmZXvdt8wvPY50MPJ-f5UkKinNnyNwoEpreswNqVLhQWziX3rYBa5tIeQlp0WkSeg9rx5PJiOXHhUo0A-qXtfy6kcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    role: 'desenvolvedor back-end',
    email: 'mailto:rafaelmafortc@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rafael-mafort-c',
    github: 'https://github.com/raafamafort',
  },
  {
    name: 'Vitor Mantovani',
    image:
      'https://s3-alpha-sig.figma.com/img/b81b/54ea/c08cd99a89439f83ae08b9dce8fe7ec3?Expires=1665964800&Signature=H3hDWd~5Tu9rkj8k~X8cZEo~APhaPGBl27N1Da2aHjLRuYqu2G-KJ4izLWCMb3DnfI4wWaNeDL8wjCmW~URWhhnyLj0zAkOBFualFvLrU~dbk~lPyJtiPfBdXlWyoq1Lf7KbU~M3APQckYZ9x4CP~fLLYThVSNjaQ-yx9g0YUpyGnTu6fBnMU1f6ERW2b9jjwpTMj00xbZ94DwFklT3kpzUMxUrAdB2I~cUZE5Tb28BXPlDtib9ortuv2Z7EBdOJl-LldRBRFLjBryYwVqrkBdhDU~8tZdTqbYcfe9QZatIEBUxnnR8LY2MFBL3pqqt-VKQxPVhFA4HwMzbn6GPzpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    role: 'desenvolvedor back-end',
    email: 'mailto:mantovanifreitasvitor@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vitor-mantovani-freitas/',
    github: 'https://github.com/VitorMantovani',
  },
]

export function AboutPage() {
  return (
    <AboutContainer>
      <div className="container">
        <TitleText color="base-title" fontSize="title-l">
          Nosso time
          <span className="circle">.</span>
        </TitleText>

        <RegularText color="base-text" fontSize="text-l" weight="500">
          A <span>Codify</span> é um projeto proposto pela IBM, que visa
          preparar candidatos para o mercado de trabalho, fornecendo materiais,
          exercícios e testes técnicos usados por empresas em seus processos
          seletivos. Além de recomendação de cursos gratuitos em diferentes
          tecnologias que são altamente solicitadas pelas empresas, dicas sobre
          como preparar seu currículo e agir em uma entrevista para que ela seja
          bem sucedida. Queremos dar aos candidatos uma plataforma onde eles
          possam encontrar tudo o que precisam para se destacar da multidão e
          aumentar suas chances de serem contratados, de maneira gratuita.
        </RegularText>

        <RegularText color="base-text" fontSize="text-l" weight="500">
          O projeto se iniciou oficialmente no dia 11/03/2022. A codify é
          composta por Cláudio Roberto, David Augusto, Lucas Amadeu, Rafael
          Mafort e Vitor Mantovani.
        </RegularText>

        <ProfileArea>
          {profilesData.map((profile, index) => {
            return (
              <ProfileCard
                key={index}
                name={profile.name}
                image={profile.image}
                github={profile.github}
                linkedin={profile.linkedin}
                email={profile.email}
                role={profile.role}
              />
            )
          })}
        </ProfileArea>
      </div>
    </AboutContainer>
  )
}
