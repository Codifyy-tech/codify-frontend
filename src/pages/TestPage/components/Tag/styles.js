import styled from 'styled-components'

const colorTag = {
  Javascript: {
    backgroundColor: '#FFF9C7',
    color: '#FFAD32',
  },
  Angular: {
    backgroundColor: '#EFE0E0',
    color: '#E11F21',
  },
  Typescript: {
    backgroundColor: '#C6E1FF',
    color: '#3178C6',
  },
  React: {
    backgroundColor: '#9feaff48',
    color: '#00C8FF',
  },
  Java: {
    backgroundColor: '#EFE0E0',
    color: '#E11F21',
  },
  Python: {
    backgroundColor: '#FFF9C7',
    color: '#FFAD32',
  },
}

export const TagContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: ${({ nameTag }) => colorTag[nameTag].backgroundColor};
  color: ${({ nameTag }) => colorTag[nameTag].color};
`

export const TagLevel = styled.ul`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding-top: 16px;
  }
`
