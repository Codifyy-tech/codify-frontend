import styled from 'styled-components'

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
`

export const PlayerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 30px;
  padding: 2rem;

  > div {
    cursor: pointer;
  }
`

export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 450px) {
    display: none;
  }
`

export const PlayerArea = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const VideoArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`

export const Video = styled.div`
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 10px;

  border-radius: 15px;
  overflow: hidden;
`

export const ClassesArea = styled.div`
  flex: 2;

  > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors['base-background']};
    padding: 30px 8% 30px 30px;
    right: 0px;
    border-radius: 15px;
    height: 90vh;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors[`brand-blue`]};
    }
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors[`scroll-color`]};
      border-radius: 10px;
    }

    span {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }
  }
`

export const ClassesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  width: 100%;

  .apply-filter,
  .reset-filter {
    border: transparent;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors['base-white']};
    font-weight: 600;
  }

  .apply-filter {
    background-color: ${({ theme }) => theme.colors['brand-blue']};
  }

  .reset-filter {
    background-color: ${({ theme }) => theme.colors['brand-blue-dark']};
  }
`

export const ProgressArea = styled.div`
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 10px;
  width: 60%;
  padding: 0.8rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`
