import { TitleText } from '../../../../components/Typograph'
import { TestButton, TestContent, TestDesc, TestType } from './style'
import { ReactComponent as Start } from '../../../../assets/start.svg'
import { useState } from 'react'
import { ModalTest } from '../ModalTest'

export function TestStructure({
  title,
  icon,
  desc,
  type,
  practicalTestId,
  theoryTestId,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleModal() {
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
