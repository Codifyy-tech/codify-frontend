import styled from 'styled-components'

export const MainContainer = styled.div`
  overflow: auto;
  width: 100%;
  padding: 0px 32px;
  height: 100vh;
  flex: 10;

  > header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 42px 0px;
  }
`

export const SearchArea = styled.div`
  flex: 2;
  width: 100%;

  > form {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${({ theme }) => theme.colors['base-background']};
    padding: 6px 23px;
    border-radius: 15px;

    > input {
      width: 100%;
      border: 0px;
      padding: 10px;
      font-size: 1.1rem;
      background-color: ${({ theme }) => theme.colors['base-background']};
    }
  }
`
export const ProfileArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 1000px) {
    display: none;
  }
`
