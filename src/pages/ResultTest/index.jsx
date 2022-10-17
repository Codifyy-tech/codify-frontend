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
  RecommendContainer,
  ContentContainer,
  CourseContainer,
  ImproveContainer,
  TopicsContainer,
  RecommendCourseContainer,
  BannerTitle,
  Topic,
} from './styles'
import { ButtonForm } from '../../components/ButtonForm'
import PassTest from '../../assets/passTest.png'
import RightTopic from '../../assets/rigth-topic.svg'
import WrongTopic from '../../assets/wrong-topic.svg'
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
import { Banner } from '../CoursePage/ModalCourse/styles'

export function ResultTest({ resultTest }) {
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
      courseRecommend: {
        title: 'Estude para melhorar sua nota',
      },
    },
  }

  function goPage() {
    resultTest.approved ? navigate(-1) : navigate(`/home/course`)
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
      <ContentContainer>
        <AllAccoradion>
          <TitleContainer>
            <RegularText fontSize="text-sx" color="base-black" weight="500">
              Confira o gabarito
            </RegularText>
          </TitleContainer>
          <AccordionContainer>
            <Accordion allowMultipleExpanded={true}>
              {resultTest.questions.map((item, index) => {
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

        {resultTest.approved ? (
          ''
        ) : (
          <RecommendContainer>
            <TitleContainer>
              <RegularText fontSize="text-sx" color="base-black" weight="500">
                {message[resultTest.approved].courseRecommend.title}
              </RegularText>
            </TitleContainer>
            <ImproveContainer>
              <RecommendCourseContainer>
                <Banner color={resultTest.technology.color}>
                  <div>
                    <img src={resultTest.technology.icon} alt="" />
                  </div>
                </Banner>
                <BannerTitle>
                  <RegularText
                    fontSize="title-m"
                    color="base-black"
                    weight="600"
                  >
                    Trilha {resultTest.technology.name}
                  </RegularText>
                </BannerTitle>
              </RecommendCourseContainer>
              <CourseContainer>
                <div>
                  <RegularText
                    fontSize="title-s"
                    color="base-black"
                    weight="600"
                  >
                    Tópicos que você domina<span className="circle">.</span>
                  </RegularText>
                  <TopicsContainer>
                    {resultTest.right_topics.map((item, index) => {
                      return (
                        <Topic key={index}>
                          <img src={RightTopic} alt="" />
                          <RegularText
                            fontSize="text-m"
                            color="base-text"
                            weight="600"
                          >
                            {item}
                          </RegularText>
                        </Topic>
                      )
                    })}
                  </TopicsContainer>
                </div>
                <div>
                  <RegularText
                    fontSize="title-s"
                    color="base-black"
                    weight="600"
                  >
                    Tópicos a melhorar<span className="circle">.</span>
                  </RegularText>
                  <TopicsContainer>
                    {resultTest.wrong_topics.map((item, index) => {
                      return (
                        <Topic key={index}>
                          <img src={WrongTopic} alt="" />

                          <RegularText
                            key={index}
                            fontSize="text-m"
                            color="base-text"
                            weight="600"
                          >
                            {item}
                          </RegularText>
                        </Topic>
                      )
                    })}
                  </TopicsContainer>
                </div>
              </CourseContainer>
            </ImproveContainer>
          </RecommendContainer>
        )}
      </ContentContainer>

      <ButtonContainer onClick={goPage}>
        <ButtonForm
          backgroundColor="brand-blue"
          textColor="base-white"
          hoverBackgroundColor="base-button-hover"
        >
          {resultTest.approved
            ? 'Ir para teste prático'
            : 'Encaminhar para trilha'}
        </ButtonForm>
      </ButtonContainer>
    </TestContainer>
  )
}
