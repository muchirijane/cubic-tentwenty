import styled from 'styled-components'

export const InfoSectionContainer = styled.section`
  background-color: var(--colour-secondary);
  padding: 7rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  align-items: center;
  overflow: hidden;
`
export const InfoSectionWrapper = styled.div``
export const InfoSectionText = styled.div`
  color: var(--colour-white);
  width: 96%;

  z-index: 2;
  h2 {
    font-family: 'Cormorant', serif;
    font-size: clamp(2rem, 6vw, 6rem);
    margin-bottom: 4.5rem;
  }
  p {
    width: 60%;
  }
`

export const InfoImageWrapper = styled.div``
