import styled from 'styled-components'

export const BannerBottomContainer = styled.div`
  width: 100%;
`

export const BannerImageDesktop = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`

export const BannerImageMobile = styled.img`
  max-width: 100%;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`
