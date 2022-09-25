import { ClassContainer, ClassDesc, ClassInfo } from './styles'
import moment from 'moment'
import PlayIcon from '../../../../assets/play-icon.svg'
import { RegularText } from '../../../../components/Typograph'
import { api } from '../../../../services/api'

export function ClassBox({
  title,
  duration,
  watched,
  url,
  id,
  handleVideo,
  author,
}) {
  const token = localStorage.getItem('@Auth:token')

  const seconds = moment.duration(duration).asSeconds()
  const formattedSeconds = moment()
    .startOf('day')
    .seconds(seconds)
    .format('mm:ss')

  async function handleChecked(e) {
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
    <ClassContainer onClick={() => handleVideo(url, title, author)}>
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
        onChange={handleChecked}
        defaultChecked={watched}
      />
    </ClassContainer>
  )
}
