import { ClassContainer, ClassDesc, ClassInfo } from './styles'
import moment from 'moment'
import { ReactComponent as PlayIcon } from '../../../../assets/play-icon.svg'
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
  setClasses,
  lastClass,
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

    setClasses((oldValue) =>
      oldValue.map((classInfo) =>
        classInfo._id === id
          ? { ...classInfo, watched: !classInfo.watched }
          : classInfo,
      ),
    )
  }

  return (
    <ClassContainer>
      <div onClick={() => handleVideo(url, title, author)}>
        <input
          className="radio"
          type="radio"
          name="classes"
          id={`123${id}`}
          defaultChecked={lastClass}
        />
        <label htmlFor={`123${id}`}>
          <ClassDesc watched={watched}>
            <PlayIcon />

            <ClassInfo>
              <RegularText fontSize="text-s">{title}</RegularText>
              <RegularText fontSize="text-s">{formattedSeconds}</RegularText>
            </ClassInfo>
          </ClassDesc>
        </label>
      </div>

      <input
        className="checkbox"
        type="checkbox"
        id={id}
        onChange={handleChecked}
        defaultChecked={watched}
      />
    </ClassContainer>
  )
}
