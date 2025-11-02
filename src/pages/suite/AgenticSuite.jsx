import { section } from "motion/react-m";
import React, { useState } from "react";
import Capabilities from "./Capabilities";
import WhyHealthcare from "./WhyHealthcare";
import ClientAndUseCase from "./ClientAndUseCase";
import WhiteAiAgent from "./WhiteAiAgent";
import Features from "../Features";

const AgenticSuite = () => {
 
  return (
   <div class="min-h-screen text-white selection:bg-brand-500/40 selection:text-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-12">
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
    <ClientAndUseCase />

    {/* <!-- Capabilities Section --> */}
    <Capabilities />
    <Features />
    {/* <!-- AI Agents Section --> */}
    <WhiteAiAgent />

    {/* <!-- Call to Action / Footer --> */}
   
  </div>

 
</div>
)
  }

export default AgenticSuite;
