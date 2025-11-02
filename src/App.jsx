import React from 'react'
import Hero from './pages/Hero'
import AgenticSuite from './pages/suite/AgenticSuite'
import Page3 from './pages/UploadSection'
import Industry_useCase from './pages/Industry_UseCase'

import Started from './pages/Started'
import Footer from './pages/Footer'
import Header from './components/Header'
import VisionArchitecture from './pages/VisionArchitecture'

const App = () => {
  return (
    <div className='bg-black'>
         <Header />
    <Hero />
    <VisionArchitecture />
    <AgenticSuite />
    {/* <Page3 /> */}
    <Industry_useCase />
    {/* <WhyMatter /> */}
    <Started />
    <Footer /> 
    </div>
  )
}

export default App
