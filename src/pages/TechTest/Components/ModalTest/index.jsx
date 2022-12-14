import ReactModal from 'react-modal'
import { RegularText, TitleText } from '../../../../components/Typograph'
import { ReactComponent as Close } from '../../../../assets/close-icon.svg'
import { ButtonForm } from '../../../../components/ButtonForm'

import {
  ButtonContainer,
  CloseButton,
  HeaderInfo,
  ModalBody,
  ModalContainer,
} from './styles'
import { InfoTest } from '../InfoTest'
import { useNavigate } from 'react-router-dom'
import './style.css'

export function ModalTest({
  isModalOpen,
  toggleModal,
  type,
  company,
  practicalTestId,
  theoryTestId,
}) {
  const navigate = useNavigate()

  function handleNavigateToTest() {
    if (type === 0) {
      navigate(`/home/test/theorytest/${theoryTestId}`)
    } else {
      navigate(`/home/test/practicalTest/${practicalTestId}`, {
        state: { company },
      })
    }
  }

  const theoryTestInfo = [
    {
      text: 'O teste possui 10 questões com respostas alternativas e tem o objetivo de avaliar seus conhecimentos. Para ser considerado aprovado, você deve obter pelo menos 80% do teste correto. Não se preocupe, você poderá refazer quantas vezes quiser.',
    },
  ]

  const practicalTestInfo = [
    {
      text: 'Este teste é apenas para fins de treinamento, com o objetivo de prepará-lo para situações do mundo real onde seu desempenho profissional será testado, praticando com testes antigos utilizados pela empresa em seus processos seletivos. Não é um processo de seleção para uma posição.',
    },
  ]

  return (
    <ReactModal
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={toggleModal}
      appElement={document.getElementById('root')}
      className="Modal"
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
          top: '20%',
          left: '7%',
          right: '7%',
          bottom: '30%',
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
        <HeaderInfo>
          <div>
            <TitleText fontSize="title-ms">Atenção</TitleText>
          </div>
          <CloseButton type="button" onClick={toggleModal}>
            <Close />
          </CloseButton>
        </HeaderInfo>

        <ModalBody>
          {type === 0
            ? theoryTestInfo.map((item, key) => {
                return <InfoTest item={item.text} key={key} />
              })
            : practicalTestInfo.map((item, key) => {
                return <InfoTest item={item.text} key={key} />
              })}
        </ModalBody>
        <ButtonContainer>
          <ButtonForm
            backgroundColor="brand-blue"
            hoverBackgroundColor="base-button-hover"
            onClick={handleNavigateToTest}
          >
            <RegularText fontSize="text-m" color="base-white" weight="500">
              Iniciar
            </RegularText>
          </ButtonForm>
        </ButtonContainer>
      </ModalContainer>
    </ReactModal>
  )
}
