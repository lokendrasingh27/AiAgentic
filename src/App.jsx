import React from 'react'
import Hero from './pages/Hero'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import DIYAgentPortal from './pages/Industry_UseCase'
import EndUserBenefits from './pages/EndUserBenefits'
import AgenticSuite from './pages/suite/AgenticSuite'


const App = () => {
  return (
    <div className='bg-black'>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AgenticSuite" element={< AgenticSuite/>} />
        <Route path="/Industries" element={<DIYAgentPortal />} />
        <Route path="/Benifits" element={<EndUserBenefits />} />
      </Routes>
    </div>
  )
}

export default App
