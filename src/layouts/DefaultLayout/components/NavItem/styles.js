import styled from 'styled-components'

export const NavItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  cursor: pointer;

  > a {
    width: 100%;
    display: flex;
    gap: 20px;
    padding: 20px 30px;
    transition: all 0.3s;

    &:hover {
      background-color: white;
      border-radius: 15px;
    }
  }
`

export const NavItemIcon = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
`
