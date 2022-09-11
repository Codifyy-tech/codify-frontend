import ReactModal from 'react-modal'
import { RegularText, TitleText } from '../../../components/Typograph'
import { ReactComponent as Author } from '../../../assets/course-author.svg'
import { ReactComponent as Time } from '../../../assets/course-time.svg'
import { ReactComponent as Close } from '../../../assets/close-icon.svg'
import { ButtonForm } from '../../../components/ButtonForm'

import {
  Banner,
  ButtonContainer,
  CloseButton,
  ContentCourse,
  DescCourse,
  InfoContainer,
  ModalBody,
  ModalContainer,
  TopicContainer,
} from './styles'

export function ModalCourse({ isModalOpen, toggleModal, course }) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={toggleModal}
      appElement={document.getElementById('root')}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.57)',
        },
        content: {
          position: 'absolute',
          top: '5%',
          left: '7%',
          right: '7%',
          bottom: '7%',
          border: 'none',
          background: '#F2F3F6',
          overflow: 'hidden',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '10px',
          outline: 'none',
          padding: '0px',
        },
      }}
    >
      <ModalContainer>
        <Banner color={course.technology.color}>
          <div>
            <img src={course.technology.icon} alt="" />
          </div>
          <CloseButton type="button" onClick={toggleModal}>
            <Close />
          </CloseButton>
        </Banner>

        <ModalBody>
          <DescCourse>
            <TitleText fontSize="title-m">{course.title}</TitleText>
            <RegularText fontSize="text-m" color="base-text" weight="500">
              {course.description}
            </RegularText>
            <InfoContainer>
              <Author />
              <RegularText fontSize="text-m" color="base-text" weight="500">
                Criado por <span>{course.author}</span>
              </RegularText>
            </InfoContainer>
            <InfoContainer>
              <Time />
              <RegularText fontSize="text-m" color="base-text" weight="500">
                35 horas
              </RegularText>
            </InfoContainer>
          </DescCourse>

          <ContentCourse>
            <TitleText fontSize="title-s">
              Conteúdo da trilha - 120 aulas
            </TitleText>
            <TopicContainer>
              {course.topics.map((topic, index) => {
                return (
                  <RegularText
                    key={index}
                    fontSize="text-m"
                    color="base-text"
                    weight="500"
                  >
                    <span>{index + 1}.</span> {topic}
                  </RegularText>
                )
              })}
            </TopicContainer>
          </ContentCourse>
        </ModalBody>
        <ButtonContainer>
          <ButtonForm
            path={''}
            backgroundColor="brand-blue"
            hoverBackgroundColor="base-button-hover"
          >
            <RegularText fontSize="text-m" color="base-white" weight="500">
              Inscrever
            </RegularText>
          </ButtonForm>
        </ButtonContainer>
      </ModalContainer>
    </ReactModal>
  )
}
