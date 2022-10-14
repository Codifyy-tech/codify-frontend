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
  gap: 1rem;
  align-items: center;
  border-radius: 30px;
  padding: 1rem 20rem;

  img {
    width: 15% !important;
  }

  @media (max-width: 600px) {
    padding: 2rem;

    img {
      width: 40% !important;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem !important;
  width: 60% !important;
  text-align: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100% !important;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  width: 20%;
  padding-bottom: 2rem;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 60%;
  }
`

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .accordion {
    border: 1px solid #fdfdfd;
    border-radius: 2px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .accordion__item + .accordion__item {
    border-top: 1px solid #fdfdfd;
    border-radius: 15px;
  }

  .accordion__button {
    background-color: #f2f3f6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    font-weight: 800;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    border-radius: 10px;
  }

  .accordion__button:hover {
    background-color: #ddd;
  }

  .accordion__button:before {
    display: inline-block;
    content: '';
    min-height: 10px;
    min-width: 10px;
    margin-right: 12px;
    border-bottom: 3px solid #1a75e8;
    border-right: 3px solid #1a75e8;
    transform: rotate(-45deg);
    transition: -webkit-transform 0.2s ease-in-out;
    -ms-transition: -ms-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
  }

  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 20px;
    animation: fadein 0.35s ease-in;
  }

  /* -------------------------------------------------- */
  /* ---------------- Animation part ------------------ */
  /* -------------------------------------------------- */

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .accordion__button:before {
      border-bottom: 2px solid #1a75e8;
      border-right: 2px solid #1a75e8;
    }
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const AllAccoradion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 7rem;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
  }
`

export const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ImproveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
`

export const CourseContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['base-background']};
  width: 45%;
  justify-content: space-between;
  border-radius: 15px;
  gap: 1rem;
  padding: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 5rem;
  }
`

export const RecommendCourseContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['base-background']};
  width: 45%;
  height: 300px;
  flex-direction: column;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Topic = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const BannerTitle = styled.div`
  padding: 1rem 2rem;
`
