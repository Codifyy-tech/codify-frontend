import { RegularText, TitleText } from '../../components/Typograph'
import { ProfileCard } from './components/ProfileCard'
import { AboutContainer, ProfileArea } from './styles'

const profilesData = [
  {
    name: 'Cláudio Roberto',
    image: 'https://i.imgur.com/Ho2qL6d.png',
    role: 'desenvolvedor back-end',
    email: 'mailto:oliveirclau@hotmail.com',
    linkedin: 'https://www.linkedin.com/in/claudiorobertooliveira-10962b102/',
    github: 'https://github.com/Oliveirclau',
  },
  {
    name: 'David Augusto',
    image: 'https://i.imgur.com/Am5l2mX.png',
    role: 'desenvolvedor full-stack',
    email: 'mailto:davidribeiro086@gmail.com',
    linkedin: 'https://www.linkedin.com/in/davidaugustoo/',
    github: 'https://github.com/davidaugustoo',
  },
  {
    name: 'Lucas Amadeu',
    image: 'https://i.imgur.com/NW9U2cz.png',
    role: 'desenvolvedor front-end',
    email: 'mailto:lucas.amadeu.soares@gmail.com',
    linkedin: 'https://www.linkedin.com/in/lucas-amadeuu/',
    github: 'https://github.com/lucasamadeuu',
  },
  {
    name: 'Rafael Mafort',
    image: 'https://i.imgur.com/7a3ni9t.png',
    role: 'desenvolvedor back-end',
    email: 'mailto:rafaelmafortc@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rafael-mafort-c',
    github: 'https://github.com/raafamafort',
  },
  {
    name: 'Vitor Mantovani',
    image: 'https://i.imgur.com/tkC0GMK.png',
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
