import Feature from '../components/Feature/Feature'
import Hero from '../components/Hero/Hero'
import InfoSection from '../components/InfoSection/InfoSection'
import Layout from '../components/layout/layout'

export default function Home() {
  return (
    <Layout pageTitle="Home | Cubic Investment">
      <Hero />
      <InfoSection />
      <Feature />
    </Layout>
  )
}
