import ReactModal from 'react-modal'
import { RegularText, TitleText } from '../../../components/Typograph'
import {
  Banner,
  CloseButton,
  ContentCourse,
  DescCourse,
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
          top: '70px',
          left: '70px',
          right: '70px',
          bottom: '70px',
          border: 'none',
          background: '#F2F3F6',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '10px',
          outline: 'none',
          padding: '0px',
        },
      }}
    >
      <ModalContainer>
        <Banner>
          <div>
            <img
              src="https://vanilla.codifyy.tech/assets/images/javascriptCourseImage.svg"
              alt=""
            />
          </div>
          <CloseButton type="button" onClick={toggleModal}>
            Fechar
          </CloseButton>
        </Banner>

        <ModalBody>
          <DescCourse>
            <TitleText fontSize="title-m">{course.title}</TitleText>
            <RegularText fontSize="text-m" color="base-text" weight="500">
              {course.description}
            </RegularText>
            <RegularText fontSize="text-m" color="base-text" weight="500">
              Criado por <span>{course.author}</span>
            </RegularText>
            <RegularText fontSize="text-m" color="base-text" weight="500">
              35 horas
            </RegularText>
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
      </ModalContainer>
    </ReactModal>
  )
}
