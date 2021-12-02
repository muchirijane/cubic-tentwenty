import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from 'next/image'
import {
  InfoImageWrapper,
  InfoSectionContainer,
  InfoSectionText,
  InfoSectionWrapper,
} from './InfoSection.Styles'

export default function InfoSection() {
  let compRef = useRef(null);
  const distance = 200;
  const direction = 'down'
  const delay = 0;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
      start: '+=200 70%',
      end: '+=200 60%',
      delay,
    });
  }, [compRef, fadeDirection]);
  return (
    <InfoSectionContainer >
      <InfoSectionText ref={compRef} delay={3}>
        <h2 >
          Building A Lasting Legacy For Individuals, Families And Businesses
          Globally
        </h2>
        <p >
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
