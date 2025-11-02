import React from "react";
import { motion } from "framer-motion";

const WhyHealthcare = () => {
  const benefits = [
    {
      title: "Fragmented Workflows?",
      desc: "Integrate labs, wearables, records and chat into a single intelligent pipeline.",
    },
    {
      title: "Manual Everywhere?",
      desc: "Offload repetitive tasks and analysis to agents that never sleep.",
    },
    {
      title: "Disconnected Channels?",
      desc: "Deliver consistent experiences across text, voice, video and devices.",
    },
    {
      title: "High Cost of Care?",
      desc: "Streamline processes to reduce overhead and maximise efficiency.",
    },
    {
      title: "Need Personalisation?",
      desc: "Tailor plans, engagement and recommendations to each individual.",
    },
    {
      title: "Complex Regulation?",
      desc: "Ensure compliance with audit trails, consents and privacy built in.",
    },
  ];

  return (
    <section className="rounded-3xl lg:bg-[#0D0A14]/80 backdrop-blur-md lg:border border-white/10 shadow-xl lg:p-8 space-y-6 text-white font-[Poppins] max-w-6xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center"
      >
        Why Healthcare?
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-white/75 max-w-4xl mx-auto text-center leading-relaxed"
      >
        Healthcare and wellness are uniquely complex ecosystems. Multiple touchpoints, disparate data sources,
        and strict regulations make it challenging to deliver personalised care at scale. Our Agentic Suite tackles
        these issues head on, orchestrating every stage — from intake to adherence — with intelligent, compliant
        automation. Better outcomes, lower costs, happier patients and higher revenue: that’s the promise of
        LifestyleAI.
      </motion.p>

      {/* Benefit Cards */}
      <div className="grid sm:grid-cols-2 text-center lg:grid-cols-3 gap-6 mt-8">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 0px 25px rgba(78,124,234,0.4)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative p-5 rounded-2xl bg-[#1F1929]  border border-white/10 overflow-hidden group"
          >
            {/* Gradient hover glow */}
            {/* <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-[#4E7CEA]/40 via-[#4ECCA3]/40 to-[#4E7CEA]/40 blur-md"></div> */}

            {/* Card content */}
            <div className="relative  z-10">
              <h3 className="font-semibold mb-1">{b.title}</h3>
              <p className="text-sm text-white/75">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyHealthcare;
