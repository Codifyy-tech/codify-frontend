import { RegularText, TitleText } from '../../components/Typograph'
import { AboutContainer } from './styles'

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
          aumentar suas chances de serem contratados, de maneira gratuita. O
          projeto se iniciou oficialmente no dia 11/03/2022. A codify é composta
          por Cláudio Roberto, David Augusto, Lucas Amadeu, Rafael Mafort e
          Vitor Mantovani.
        </RegularText>

        <RegularText color="base-text" fontSize="text-l" weight="500">
          O projeto se iniciou oficialmente no dia 11/03/2022. A codify é
          composta por Cláudio Roberto, David Augusto, Lucas Amadeu, Rafael
          Mafort e Vitor Mantovani.
        </RegularText>
      </div>
    </AboutContainer>
  )
}
