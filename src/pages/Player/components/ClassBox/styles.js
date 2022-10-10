import styled from 'styled-components'

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;

  .radio {
    all: unset;
  }

  .radio:checked + label {
    svg {
      background-color: #feedde;
      color: #e8961a;
    }
  }

  .checkbox {
    appearance: none;
    background-color: #d8daec;
    margin: 0;
    font: inherit;
    cursor: pointer;
    color: currentColor;
    min-width: 1.6em;
    max-width: 1.6em;
    min-height: 1.6em;
    max-height: 1.6em;
    border-radius: 3px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;

    &::before {
      content: '';
      width: 0.75em;
      height: 0.75em;
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
`

export const ClassDesc = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;

  > svg {
    min-width: 35px;
    max-width: 35px;
    background-color: ${({ watched }) => (watched ? '#CCEEDE' : '#deebfe')};
    color: ${({ watched }) => (watched ? '#04D361' : '#1a75e8')};
    min-height: 35px;
    max-height: 35px;
    border-radius: 100%;
    transition: all 0.2s;
  }
`

export const ClassInfo = styled.div`
  display: flex;
  flex-direction: column;
`
