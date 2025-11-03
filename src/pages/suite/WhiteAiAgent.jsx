import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WhiteAiAgent = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const cards = [
    { title: "Data Agent", desc: "Collects forms, files and streams from wearables and apps." },
    { title: "Interview Agent", desc: "Converses with users to capture structured intake data." },
    { title: "Engagement Agent", desc: "Delivers nudges, streaks and personalised follow-ups." },
    { title: "Retention Agent", desc: "Spots at-risk users and launches proactive engagement." },
    { title: "Upsell & Cross-Sell Agent", desc: "Recommends relevant services and products ethically." },
    { title: "Payment Agent", desc: "Processes payments securely within chat sessions." },
    { title: "Insight Agent", desc: "Detects patterns and generates actionable health trends." },
    { title: "Compliance Agent", desc: "Captures consent, logs actions and ensures regulatory compliance." },
    { title: "Data Validation Agent", desc: "Validates inputs, flags anomalies and corrects errors." },
    { title: "Notification Agent", desc: "Schedules reminders, alerts and escalations on time." },
    { title: "Brand Voice Agent", desc: "Ensures messaging aligns with your unique tone and voice." },
    { title: "Knowledge Agent (RAG)", desc: "Answers queries by tapping into your proprietary knowledge base." },
    { title: "Integration Agent", desc: "Connects devices, apps and third-party services seamlessly." },
    { title: "Reporting Agent", desc: "Creates detailed reports summarising user progress and insights." },
  ];

  useEffect(() => {
    // Faster stagger reveal
    cards.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 40); // 40ms delay between cards (was 100ms)
    });
  }, []);

  return (
    <section className="rounded-3xl lg:bg-[#0A0810] backdrop-blur lg:border border-white/10 shadow-soft p-6 overflow-hidden">
         
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-semibold mb-4 text-white text-center">White-label AI Agents</h2>
      <p className="text-white/75 max-w-4xl text-center mb-6">
        Our suite of agents can be entirely white-labelled. Configure, rebrand and deploy these building
        blocks under your own identity. Each agent is purpose-built, yet you can pick only the ones you need.
      </p>
      </div>

      <div className="flex flex-wrap items-center justify-center text-center lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl bg-[#1F1929] w-80 border border-white/10 flex flex-col justify-between transform transition-all duration-300 ease-out hover:scale-[1.05] hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 10}ms` }}
          >
            <div>
              <h3 className="font-semibold mb-1 text-white">{card.title}</h3>
              <p className="text-sm text-white/70">{card.desc}</p>
            </div>
            <div className="mt-3 text-xs text-white/60">White-label ready</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhiteAiAgent;
