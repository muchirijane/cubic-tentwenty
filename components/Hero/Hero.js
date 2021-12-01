import React from 'react'
import { HeroBg, HeroContainer, HeroVideo } from './Hero.Styles'

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroVideo src="/hero.mp4" autoPlay loop muted playsInline />
      </HeroBg>
    </HeroContainer>
  )
}
