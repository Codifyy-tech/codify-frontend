import styled from 'styled-components'

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  border-radius: 100%;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`
