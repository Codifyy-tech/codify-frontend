import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['base-button']};
      border-color: ${theme.colors['brand-blue-dark']};
      color: ${theme.colors['base-white']};

      svg {
        fill: ${({ theme }) => theme.colors['base-white']};
      }

      &:hover {
        background: ${({ theme }) => theme.colors['base-button-hover']};
      }
    `}
  }
`

export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors['base-background']};
  color: ${({ theme }) => theme.colors['brand-blue-dark']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: ${({ theme }) => theme.textSizes['text-m']};
  border-radius: 15px;
  width: 150px;
  height: 150px;
  border: 0px;
  transition: 0.2s;

  svg {
    fill: ${({ theme }) => theme.colors['brand-blue-dark']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;
`
