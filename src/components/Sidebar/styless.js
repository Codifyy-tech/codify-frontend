import styled from 'styled-components'

export const SignInDescSide = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.1rem;
  text-align: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  border-radius: 0px 10px 10px 0px;
  padding: 0px 2rem;

  > aside {
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    align-items: center;
    max-width: 21.87rem;
    gap: 2.8rem;

    > div {
      display: flex;
      flex-direction: column;
      margin: 0px auto;
      align-items: center;
      max-width: 21.87rem;
      gap: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
