import { CaretLeft } from 'phosphor-react'
import ReactModal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import { RegularText } from '../../../../components/Typograph'
import { ProfileArea, UserCardHeader } from './styles'

export function ModalUser({ isModalOpen, toggleModal }) {
  const navigate = useNavigate()

  function backPage() {
    navigate('/dashboard/profiles')
  }

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
          top: '7%',
          left: '7%',
          right: '7%',
          bottom: '7%',
          border: 'none',
          background: 'white',
          overflow: 'hidden',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '10px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      <UserCardHeader>
        <div onClick={backPage}>
          <CaretLeft size={42} weight="bold" />
        </div>
        <ProfileArea className="profile-area">
          <RegularText color="base-text" weight="400">
            Lucas Amadeu
          </RegularText>
          oi
        </ProfileArea>
      </UserCardHeader>
    </ReactModal>
  )
}
