import styled from 'styled-components'

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 30px;
  padding: 2rem;
  margin: 2rem;

  > div {
    cursor: pointer;
  }

  span {
    margin-left: 149px;
  }

  @media (max-width: 600px) {
    span {
      margin-left: 0px;
    }
  }
`

export const TestBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  align-items: center;
  border-radius: 30px;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }
`

export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`
