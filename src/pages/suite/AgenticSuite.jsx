import { motion } from "framer-motion";

import React, { useState } from "react";
import Capabilities from "./Capabilities";
import WhyHealthcare from "./WhyHealthcare";
import ClientAndUseCase from "./ClientAndUseCase";
import WhiteAiAgent from "./WhiteAiAgent";
import Features from "../Features";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AgenticSuite = () => {
 
  return (
   <div class="min-h-screen text-white p-4 selection:bg-brand-500/40 selection:text-white">
    <Link to='/'>
             <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center  rounded-full px-2 py-2 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white"
              >
               <FaArrowLeft /> <span></span>
              </motion.a>
             </Link>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 space-y-12">
    {/* <!-- Hero Section --> */}
    <header class="text-center">
      <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">The AI Agentic Suite</h1>
      <p class="max-w-3xl mx-auto text-lg sm:text-xl text-white/80">
        Reimagining healthcare and wellness workflows with autonomous, white‑label AI agents that
        think, remember and act — so your team can focus on what matters most.
      </p>
    </header>

    {/* <!-- Why Healthcare Section --> */}
    <WhyHealthcare />

    {/* <!-- Industry Clients & Use Cases Section --> */}
    {/* <ClientAndUseCase /> */}

    {/* <!-- Capabilities Section --> */}
    <Capabilities />
    {/* <Features /> */}
    {/* <!-- AI Agents Section --> */}
    <WhiteAiAgent />

    {/* <!-- Call to Action / Footer --> */}
   
  </div>

 
</div>
)
  }

export default AgenticSuite;
