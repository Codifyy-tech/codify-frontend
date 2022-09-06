import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Select = styled.select`
  width: 100%;
  border: 2px solid;
  border-color: ${({ theme, isInvalid }) =>
    isInvalid ? theme.colors[`base-error`] : 'transparent'};
  padding: 1.25rem;
  border-radius: 0.6rem;
  background-color: white;
  font-size: ${({ theme }) => theme.textSizes[`text-m`]};
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors[`base-error`]};
  font-size: ${({ theme }) => theme.textSizes[`text-s`]};
`
