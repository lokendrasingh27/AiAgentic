import React from "react";
import { motion } from "framer-motion";

const VisionArchitecture = () => {
  const Card = ({ icon, title, desc }) => (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex flex-col text-center items-center justify-center border border-white/10 rounded-2xl p-8 shadow-md bg-white/5 backdrop-blur-md overflow-hidden group"
    >
      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#4E7CEA]/40 via-[#4ECCA3]/40 to-[#4E7CEA]/40 blur-md"></div>

      {/* Inner content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4E7CEA] to-[#4ECCA3] text-white mb-4 shadow-lg shadow-[#4E7CEA]/40">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/75 text-sm text-center">{desc}</p>
      </div>
    </motion.div>
  );

  return (
    <div className=" bg-black text-white leading-relaxed min-h-screen">
      {/* Our Vision Section */}
      <section id="vision" className="py-6 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">Our Vision</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 0 20"></path>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
              </svg>
            }
            title="Data-Rich Insights"
            desc="Unlock the 97% of healthcare data that goes unused. Our AI surfaces patterns and insights to empower proactive care."
          />
          <Card
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
              </svg>
            }
            title="Autonomous Care"
            desc="Agentic AI makes decisions and takes action without constant supervision, streamlining workflows and boosting efficiency."
          />
          <Card
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.8 4.6l-6.6-2.2L12 2l-2.2.4L3.2 4.6c-.8.3-1.4 1.1-1.4 2v8.8c0 .9.6 1.7 1.4 2l6.6 2.2L12 22l2.2-.4 6.6-2.2c.8-.3 1.4-1.1 1.4-2V6.6c0-.9-.6-1.7-1.4-2z"></path>
                <path d="M7 7h10v10H7z"></path>
              </svg>
            }
            title="Human-Centric Experiences"
            desc="Keep the human at the centre. Our system handles repetitive tasks so clinicians can focus on compassionate care."
          />
        </div>
      </section>

      {/* Plug and Play Architecture Section */}
      <section id="architecture" className="py-6 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">Plug-and-Play Architecture</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="12" y1="2" x2="12" y2="5"></line>
                <line x1="12" y1="19" x2="12" y2="22"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="2" y1="12" x2="5" y2="12"></line>
                <line x1="19" y1="12" x2="22" y2="12"></line>
              </svg>
            }
            title="Interoperable Standards"
            desc="Our modules integrate via HL7 FHIR and standard APIs, making it effortless to plug into EHRs, lab systems and wearables."
          />
          <Card
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h18v18H3V3z"></path>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
            }
            title="No-Code & Pro-Code"
            desc="Configure flows with a drag-and-drop builder or API. Both non-technical users and developers can tailor the system."
          />
          <Card
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h6v6H4z"></path>
                <path d="M14 4h6v6h-6z"></path>
                <path d="M14 14h6v6h-6z"></path>
                <path d="M4 14h6v6H4z"></path>
              </svg>
            }
            title="Self-Improving Workflows"
            desc="Agents learn from every interaction, continuously adapting to deliver more accurate recommendations and actions."
          />
        </div>
      </section>
    </div>
  );
};

export default VisionArchitecture;
