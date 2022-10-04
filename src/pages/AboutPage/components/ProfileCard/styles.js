import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  display: flex;
  max-width: 30rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-card-profile']};
  padding: 0.6rem;
  border-radius: 10px;
  gap: 2rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

export const ImageArea = styled.div`
  display: flex;
  flex: 1;

  > img {
    max-width: 100%;
    width: 100%;
    border-radius: 10px;
  }
`

export const DescArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  padding: 0.6rem;

  @media (max-width: 500px) {
    gap: 1rem;
  }
`

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const IconsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 0.8rem;

  svg {
    cursor: pointer;
    color: #0f1137;
    transition: all 0.3s;

    &:hover {
      color: rgba(15, 17, 55, 0.79);
    }
  }

  @media (max-width: 500px) {
    gap: 1.5rem;
  }
`
