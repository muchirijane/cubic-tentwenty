import React from 'react'
import { HeroBg, HeroContainer, HeroContent, HeroVideo } from './Hero.Styles'

export default function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroVideo src="/hero.mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <h1>If not now, then when? </h1>
        <h2>Time to make your wealth work for you</h2>
      </HeroContent>
    </HeroContainer>
  )
}
