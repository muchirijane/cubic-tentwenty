import styled from 'styled-components'

export const InfoSectionContainer = styled.section`
  background-color: var(--colour-secondary);
  padding: 7rem 5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;
  overflow: hidden;
`
export const InfoSectionWrapper = styled.div``
export const InfoSectionText = styled.div`
  color: var(--colour-white);
  width: 96%;
  margin-top: 4rem;

  z-index: 2;
  h2 {
    font-family: 'Cormorant', serif;
    font-size: clamp(2rem, 6vw, 6rem);
    margin-bottom: 4.5rem;
    @media (max-width: 460px) {
      font-size: clamp(1.5rem, 6vw, 6rem);
      width: 60%;
    }
  }
  p {
    width: 60%;
    font-weight: 400;
    @media (max-width: 460px) {
      font-size: 1.5rem;
    }
  }
`

export const InfoImageWrapper = styled.div`
  margin-top: 4rem;

  @media (max-width: 1024px) {
    margin-top: -5rem;
  }
`
