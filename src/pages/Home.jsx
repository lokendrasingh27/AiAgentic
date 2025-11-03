import React from 'react'
import Hero from './Hero'
import VisionArchitecture from './VisionArchitecture'
import Features from './Features'
import EndUserBenefits from './EndUserBenefits'
import CtaSection from './Started'
import Footer from './Footer'
import Header from '../components/Header'
import AgenticSuite from './suite/AgenticSuite'
import ClientAndUseCase from './suite/ClientAndUseCase'

const Home = () => {
  return (
    <div>
        <Header />
      <Hero />
      <VisionArchitecture />
      {/* <AgenticSuite/> */}
      <ClientAndUseCase/>
      <Features />
      {/* <EndUserBenefits /> */}
      <CtaSection />
      <Footer />
    </div>
  )
}

export default Home
