import styled from 'styled-components'

export const FeatureContainer = styled.section`
  padding: 0 4rem;
`

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  grid-gap: 2rem;
  margin-top: 12rem;
`

export const FeatureItem = styled.div`
  max-width: 400px;
  h2 {
    font-weight: 400;
    margin-bottom: 2rem;
    width: 30%;
  }
  p {
    width: 80%;
    margin-bottom: 5rem;
  }
`
