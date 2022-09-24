import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const CoursesArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CourseCardArea = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`

export const BannerContainer = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  border-radius: 10px;
  padding: 80px 40px;
`

export const BannerDesc = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`

export const BannerImage = styled.div`
  flex: 1;
  position: relative;
  bottom: 100px;
  > img {
    max-width: 100%;
    position: absolute;
    right: 0px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`
