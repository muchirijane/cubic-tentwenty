import React from 'react'
import Image from 'next/image'
import {
  InfoImageWrapper,
  InfoSectionContainer,
  InfoSectionText,
  InfoSectionWrapper,
} from './InfoSection.Styles'

export default function InfoSection() {
  return (
    <InfoSectionContainer>
      <InfoSectionText>
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
          height={600}
          layout="responsive"
          alt="global illustration"
        />
      </InfoImageWrapper>
    </InfoSectionContainer>
  )
}
