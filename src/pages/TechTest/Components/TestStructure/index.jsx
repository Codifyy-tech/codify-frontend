import { TitleText } from '../../../../components/Typograph'
import { TestButton, TestContent, TestDesc, TestType } from './style'
import { ReactComponent as Start } from '../../../../assets/start.svg'

export function TestStructure({ title, icon, desc }) {
  return (
    <TestContent>
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
  )
}
