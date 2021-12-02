import React, { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import Image from 'next/image'
import {
  InfoImageWrapper,
  InfoSectionContainer,
  InfoSectionText,
} from './InfoSection.Styles'

export default function InfoSection() {
  const sectionRef = useRef(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })
  //Animation for fade in
  const fadeIn = () => {
    gsap.to(sectionRef.current, 1, {
      opacity: 1,
      y: -80,
      ease: 'power3.out',
      stagger: {
        amount: 0.3,
      },
    })
  }

  //Animation for fade out
  const fadeOut = () => {
    gsap.to(sectionRef.current, 1, {
      opacity: 0,
      y: -30,
      ease: 'power3.out',
    })
  }

  //checking if the viewport is visible to the user
  intersection && intersection.intersectionRatio < 0.5 ? fadeOut() : fadeIn()
  return (
    <InfoSectionContainer>
      <InfoSectionText ref={sectionRef}>
        <h2>
          Building A Lasting Legacy For Individuals, Families And Businesses
          Globally
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </InfoSectionText>
      <InfoImageWrapper>
        <Image
          src="/InfoBg.svg"
          width={800}
          height={700}
          layout="responsive"
          alt="global illustration"
        />
      </InfoImageWrapper>
    </InfoSectionContainer>
  )
}
