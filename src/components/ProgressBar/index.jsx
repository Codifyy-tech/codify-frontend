import { RegularText } from '../Typograph'
import {
  FillerArea,
  ProgressBarArea,
  ProgressBarContainer,
  ProgressDesc,
} from './styles'

export function ProgressBar({ completed }) {
  return (
    <ProgressBarContainer>
      <ProgressDesc>
        <RegularText fontSize="text-s" weight="500" color="base-text">
          Progresso da trilha:
        </RegularText>
        <RegularText fontSize="text-s" weight="500" color="base-text">
          {`${completed}%`}
        </RegularText>
      </ProgressDesc>
      <ProgressBarArea>
        <FillerArea completed={completed} />
      </ProgressBarArea>
    </ProgressBarContainer>
  )
}
