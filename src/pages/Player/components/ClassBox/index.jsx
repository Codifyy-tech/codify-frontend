import { ClassContainer, ClassDesc, ClassInfo } from './styles'
import moment from 'moment'

import PlayIcon from '../../../../assets/play-icon.svg'
import { RegularText } from '../../../../components/Typograph'
import { api } from '../../../../services/api'

export function ClassBox({ title, duration, watched, url, id }) {
  const token = localStorage.getItem('@Auth:token')

  const formattedSeconds = moment()
    .startOf('day')
    .seconds(duration)
    .format('mm:ss')

  async function handleTeste(e) {
    await api.put(
      `/class/${id}`,
      {
        watched: e.target.checked,
      },
      {
        headers: { Authorization: 'Bearer ' + token },
      },
    )
  }

  return (
    <ClassContainer>
      <ClassDesc>
        <img src={PlayIcon} alt="" />

        <ClassInfo>
          <RegularText fontSize="text-s">{title}</RegularText>
          <RegularText fontSize="text-s">{formattedSeconds}</RegularText>
        </ClassInfo>
      </ClassDesc>

      <input
        type="checkbox"
        id={id}
        onChange={handleTeste}
        defaultChecked={watched}
      />
    </ClassContainer>
  )
}
