import styled from 'styled-components'

export const TestContent = styled.div`
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 15px;
  padding: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const TestType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TestDesc = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const TestButton = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
`
