import styled from 'styled-components'

export const FeatureContainer = styled.section`
  padding: 0 4rem;
  margin-bottom: 4rem;
`

export const FeatureWrapper = styled.div`

  margin-top: 12rem; 
  display: flex;
  overflow-x: auto;
  margin-top: 3rem;
   &::-webkit-overflow-scrolling: touch; 
   &::-webkit-scrollbar {
    width: 0;
  }
`

export const FeatureItem = styled.div`
  max-width: 400px;
  cursor: pointer;
  padding: 2rem;
  margin-top: 7rem;
  margin-bottom: 5rem;

  &:not(:last-child) {
    margin-right: 4rem;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--colour-primary);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    
  }
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
