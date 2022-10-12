import styled from 'styled-components'

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  input {
    appearance: none;
    background-color: #d8daec;
    margin: 0;
    font: inherit;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
      content: '';
      width: 0.8em;
      height: 0.8em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${({ theme }) => theme.colors[`brand-blue`]};
      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      border-radius: 10px;
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  label {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.textSizes['text-m']};
  }
`
