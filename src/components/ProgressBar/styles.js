import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
`

export const ProgressBarArea = styled.div`
  height: 15px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors['base-background-progressbar']};
  border-radius: 20px;
`

export const ProgressDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const FillerArea = styled.div`
  height: 100%;
  width: ${({ completed }) => `${completed}%`};
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  border-radius: 20px 20px 20px 20px;
  text-align: 'right';
  transition: all 0.3s;

  > span {
    padding: 10px;
    color: white;
    font-size: 12px;
    font-weight: bold;
  }
`
