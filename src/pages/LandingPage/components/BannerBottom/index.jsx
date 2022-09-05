import {
  BannerBottomContainer,
  BannerImageDesktop,
  BannerImageMobile,
} from './styles'

import bannerBottom from '../../../../assets/banner-bottom.svg'
import bannerBottomMobile from '../../../../assets/banner-bottom-mobile.svg'

export function BannerBottom() {
  return (
    <BannerBottomContainer data-aos="fade-right" className="container">
      <BannerImageDesktop src={bannerBottom} />
      <BannerImageMobile src={bannerBottomMobile} />
    </BannerBottomContainer>
  )
}
