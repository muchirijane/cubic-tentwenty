import styled from 'styled-components'

export const HeroContainer = styled.section`
  height: 80vh;
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
        rgba(0, 0, 0, 0.05) 0%,
        rgba(0, 0, 0, 0.01) 100%
      ),
      linear-gradient(100deg, rgba(0, 0, 0, 0.05) 0%, transparent 100%);
  }
`

export const HeroContent = styled.div``

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
