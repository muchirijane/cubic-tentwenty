import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { FeatureContainer, FeatureItem, FeatureWrapper } from './Feature.Styles'

export default function Feature() {
  const featureContent = [
    {
      id: '1',
      title: 'Design Driven',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      img: '/featureImg1.png',
      alt: 'Design Driven feature',
    },
    {
      id: '2',
      title: 'Affordable Luxury',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      img: '/featureImg2.png',
      alt: 'Affordable Luxury feature',
    },
    {
      id: '3',
      title: 'Detailed  craftsmanship',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      img: '/featureImg3.png',
      alt: 'Detailed  craftsmanship feature',
    },
    {
      id: '4',
      title: 'Design Driven',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      img: '/featureImg1.png',
      alt: 'Design Driven feature',
    },
    {
      id: '5',
      title: 'Affordable Luxury',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      img: '/featureImg2.png',
      alt: 'Affordable Luxury feature',
    },
    {
      id: '6',
      title: 'Detailed  craftsmanship',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      img: '/featureImg3.png',
      alt: 'Detailed  craftsmanship feature',
    },
  ]
  return (
    <FeatureContainer>
      <FeatureWrapper>
        {featureContent.map((item) => (
          <FeatureItem key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Image
              src={item.img}
              alt={item.alt}
              width={348}
              height={543}
              layout="fixed"
            />
          </FeatureItem>
        ))}
      </FeatureWrapper>
    </FeatureContainer>
  )
}
