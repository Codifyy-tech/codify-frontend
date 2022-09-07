import { useContext } from 'react'
import { RegularText, TitleText } from '../../components/Typograph'
import { AuthContext } from '../../contexts/AuthContext'
import { splitName } from '../../utils/splitName'
import { BannerContainer, BannerDesc, BannerImage } from './styles'

export function HomePage() {
  const { user } = useContext(AuthContext)

  const name = splitName(user.name)

  return (
    <>
      <BannerContainer>
        <BannerDesc>
          <TitleText as="h2" color="base-white" fontSize="title-l">
            Olá, {name[0]}!
          </TitleText>
          <RegularText color="base-white" fontSize="text-m" weight="500">
            RegularText Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry standard
            dummy text ever since the 1500s, when
          </RegularText>
        </BannerDesc>
        <BannerImage>
          <img
            src="https://vanilla.codifyy.tech/assets/images/bannerHomeImage.png"
            alt=""
          />
        </BannerImage>
      </BannerContainer>
    </>
  )
}
