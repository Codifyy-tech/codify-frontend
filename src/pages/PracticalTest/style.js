import styled from 'styled-components'

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const TestHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  border-radius: 30px;
  padding: 2rem;
  margin: 2rem;
`

export const TestBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;
  border-radius: 30px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  span {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.colors['brand-blue']};
  }

  .container {
    max-width: 70rem;
    margin: 0px auto;
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  ol {
    padding-left: 1.5rem;
  }

  img {
    width: 100%;
  }

  pre {
    background: ${({ theme }) => theme.colors['base-background']};
    border-radius: 10px;
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }

  @media (max-width: 1366px) {
    .container {
      max-width: 76rem;
      margin: 0px auto;
      padding: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  max-width: 35%;
  @media (max-width: 600px) {
    max-width: 90%;
  }
`

export const ButtonBack = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors['brand-blue']};
  gap: 0.5rem;
`
