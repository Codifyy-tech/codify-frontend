import { RegularText, TitleText } from '../../components/Typograph'
import {
  TestContainer,
  TestHeader,
  TestBody,
  ButtonContainer,
  TextContainer,
  AccordionContainer,
  ResultContainer,
  TitleContainer,
  AllAccoradion,
} from './styles'
import { ButtonForm } from '../../components/ButtonForm'
import PassTest from '../../assets/passTest.png'
import FailedTest from '../../assets/failtest.png'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css'
import { CheckCircle, XCircle } from 'phosphor-react'

export function ResultTest({ resultTest }) {
  console.log(resultTest)

  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
  const name = user.name.split(' ')

  const message = {
    true: {
      title: `Parabéns, ${name[0]}!`,
      message: `Você passou no teste com ${resultTest.result}% de acerto. Você fez um trabalho incrível, e estamos muito orgulhosos de você.`,
      image: PassTest,
    },
    false: {
      title: `Não foi dessa vez, ${name[0]}!`,
      message: `Você atingiu ${resultTest.result}% de acerto e não conseguiu passar no teste. Não desamine, estamos torcendo por você`,
      image: FailedTest,
    },
  }

  function backHome() {
    navigate('/home')
  }

  return (
    <TestContainer>
      <TestHeader>
        <TitleText>Teste Teórico</TitleText>
      </TestHeader>

      <TestBody>
        <img src={message[resultTest.approved].image} alt="imagem-teste" />
        <TextContainer>
          <TitleText>{message[resultTest.approved].title}</TitleText>
          <RegularText color="base-text" weight="600">
            {message[resultTest.approved].message}
          </RegularText>
        </TextContainer>
      </TestBody>
      <AllAccoradion>
        <TitleContainer>
          <RegularText fontSize="text-sx" color="base-black" weight="500">
            Confira o gabarito
          </RegularText>
        </TitleContainer>
        <AccordionContainer>
          <Accordion allowMultipleExpanded={true}>
            {resultTest.questions.map((item, index) => {
              console.log(item)
              return (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Questão {index + 1}
                      {item.scored ? (
                        <CheckCircle
                          size={32}
                          weight="fill"
                          color={'#3EDA44'}
                        />
                      ) : (
                        <XCircle size={32} weight="fill" color={'#FF0000'} />
                      )}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ResultContainer>
                      <RegularText
                        fontSize="text-m"
                        color="base-black"
                        weight="800"
                      >
                        {item.question}
                      </RegularText>
                      <div>
                        <RegularText
                          fontSize="text-m"
                          color="base-text"
                          weight="600"
                        >
                          <span className="circle">Respota Correta:</span>{' '}
                          {item.answer_correct}
                        </RegularText>
                        <RegularText
                          fontSize="text-m"
                          color="base-text"
                          weight="600"
                        >
                          <span className="circle">Sua resposta:</span>{' '}
                          {item.answer_user}
                        </RegularText>
                      </div>
                    </ResultContainer>
                  </AccordionItemPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </AccordionContainer>
      </AllAccoradion>
      <ButtonContainer onClick={backHome}>
        <ButtonForm
          backgroundColor="brand-blue"
          textColor="base-white"
          hoverBackgroundColor="base-button-hover"
        >
          Voltar para home
        </ButtonForm>
      </ButtonContainer>
    </TestContainer>
  )
}
