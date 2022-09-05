import styled from 'styled-components'

export const TitleText = styled.h1`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-size: ${({ theme, fontSize }) => theme.textSizes[`${fontSize}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};

  > .circle {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }
`

export const RegularText = styled.p`
  color: ${({ theme, color }) => theme.colors[`${color}`]};
  font-size: ${({ theme, fontSize }) => theme.textSizes[`${fontSize}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
`
