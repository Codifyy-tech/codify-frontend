import { TitleText } from '../../../../components/Typograph'
import { TestButton, TestContent, TestDesc, TestType } from './style'
import { ReactComponent as Start } from '../../../../assets/start.svg'
import { useState } from 'react'
import { ModalTest } from '../ModalTest'
import { toast } from 'react-toastify'

export function TestStructure({
  title,
  icon,
  desc,
  type,
  practicalTestId,
  theoryTestId,
  isPracticalOpen,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleModal() {
    console.log(isPracticalOpen)
    if (!isPracticalOpen && type === 1)
      return toast.error('Teste não liberado', {
        theme: 'colored',
      })

    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <TestContent onClick={toggleModal}>
        <TestType>
          <div>
            <TitleText fontSize="text-ms" weight="600">
              {title}
              <span>.</span>
            </TitleText>
          </div>
          <div>{icon}</div>
        </TestType>
        <TestDesc>
          <TitleText fontSize="text-s" color="base-text" weight="400">
            {desc}
          </TitleText>
          <TestButton>
            <Start />
          </TestButton>
        </TestDesc>
      </TestContent>
      <ModalTest
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        type={type}
        practicalTestId={practicalTestId}
        theoryTestId={theoryTestId}
      />
    </>
  )
}
