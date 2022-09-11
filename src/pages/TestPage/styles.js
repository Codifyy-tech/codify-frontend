import styled from 'styled-components'

export const TestContainer = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const TestArea = styled.ul`
  display: flex;
  flex: 3;
  flex-direction: column;
  gap: 20px;
`

export const FilterArea = styled.div`
  flex: 1;

  > form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors['base-background']};
    padding: 20px 8% 20px 20px;
    right: 0px;
    border-radius: 15px;

    span {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }
  }
`

export const CheckBoxContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
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
