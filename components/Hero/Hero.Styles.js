import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        100deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      linear-gradient(100deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%);
  }
`

export const HeroContent = styled.div`
  color: var(--colour-white);
  position: absolute;
  z-index: 2000;
  top: 50%;
  left: 10%;
  width: 50%;

  margin-left: 3rem;
  h1 {
    font-family: 'Cormorant', serif;
    font-weight: 600;
  }

  h2 {
    font-size: 5rem;
    font-weight: 300;
    @media (max-width: 440px) {
      font-size: 4.2rem;
    }
  }

  @media (min-width: 1500px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const HeroVideo = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
