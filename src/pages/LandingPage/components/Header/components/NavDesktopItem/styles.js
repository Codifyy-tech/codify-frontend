import styled from 'styled-components'

export const NavLink = styled.a`
  border-bottom: 3px solid transparent;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.textSizes['text-m']};
  font-weight: 500;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors['brand-blue']};
    color: ${({ theme }) => theme.colors['brand-blue']};
  }
`
