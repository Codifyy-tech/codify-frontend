import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.6rem;
  border: 0px;
  background-color: white;
  font-size: ${({ theme }) => theme.textSizes[`text-m`]};
`
