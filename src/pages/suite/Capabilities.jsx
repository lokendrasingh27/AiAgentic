import React, { useState } from "react";

const Capabilities = () => {
  const [capabilities, setCapabilities] = useState([
    { id: 1, name: "Comprehensive Data Collection", desc: "Unified intake from forms, wearables, apps and integrations.", active: true },
    { id: 2, name: "Conversational Interviews", desc: "Automated chat, voice or video interviews capturing structured data.", active: true },
    { id: 3, name: "Report Summarisation", desc: "Turns lab reports and diagnostics into concise insights.", active: true },
    { id: 4, name: "Multi-modal Understanding", desc: "Understands text, voice, images and video across languages.", active: true },
    { id: 5, name: "Personalised Planning", desc: "Builds tailored nutrition, fitness or therapy plans from your data.", active: true },
    { id: 6, name: "Continuous Engagement", desc: "Delivers nudges, streaks, reminders and gamified challenges.", active: true },
    { id: 7, name: "Secure Payments", desc: "Processes payments within chat with built-in compliance.", active: true },
    { id: 8, name: "Smart Upselling", desc: "Recommends relevant products and programs ethically.", active: true },
    { id: 9, name: "Risk Prediction", desc: "Detects early risk markers from behaviour and biometrics.", active: true },
    { id: 10, name: "Compliance Logging", desc: "Captures consents, interactions and logs automatically.", active: true },
    { id: 11, name: "Real-time Analytics", desc: "Visualises adherence, biometrics and business metrics.", active: true },
    { id: 12, name: "Contextual Memory", desc: "Remembers every interaction to build a living profile.", active: true },
    { id: 13, name: "Multi-channel Integration", desc: "Seamless across WhatsApp, Telegram, mobile, web & devices.", active: true },
    { id: 14, name: "Brand Voice Consistency", desc: "Adopts your tone and personality automatically.", active: true },
    { id: 15, name: "White-label Deployment", desc: "Fully customisable UI and branding to suit your identity.", active: true },
  ]);

  // Move Up / Down handler
  const moveItem = (index, direction) => {
    const newList = [...capabilities];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newList.length) return;
    [newList[index], newList[targetIndex]] = [newList[targetIndex], newList[index]];
    setCapabilities(newList);
  };

  // Toggle handler
  const toggleActive = (id) => {
    setCapabilities((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  return (
    <section className="rounded-3xl lg:bg-[#0A0810] backdrop-blur sm:border-hidd lg:border border-white/10 shadow-soft lg:p-6 text-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4 text-center">15 Agentic Capabilities</h2>
      <p className="text-white/75 mb-4 max-w-4xl text-center">
        Drag the capabilities up or down using the arrow buttons. Toggle a capability on or off to tailor
        your suite preview. The order and selection will update live to reflect your priorities.
      </p>
      </div>

      <ul className="space-y-3">
        {capabilities.map((cap, index) => (
          <li
            key={cap.id}
            className="flex items-start transition-transform duration-300 hover:scale-102 justify-between p-3 rounded-xl bg-[#1F1929] border border-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveItem(index, "up")}
                  className="p-1 rounded "
                  aria-label="Move up"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => moveItem(index, "down")}
                  className="p-1 rounded hover:bg-purple-700/40"
                  aria-label="Move down"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div>
                <div className="font-semibold">{cap.name}</div>
                <div className="text-sm text-white/70">{cap.desc}</div>
              </div>
            </div>

            {/* Toggle Switch */}
            <label className="inline-flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                checked={cap.active}
                onChange={() => toggleActive(cap.id)}
                className="hidden"
              />
              <span className={`relative w-12 h-6 rounded-full transition-colors ${cap.active ? "bg-green-500/60" : "bg-white/20"}`}>
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                    cap.active ? "translate-x-6" : "translate-x-0"
                  }`}
                ></span>
              </span>
            </label>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-white/75">
        Selected capabilities:{" "}
        <span className="font-semibold">
          {capabilities.filter((c) => c.active).length}
        </span>
      </p>
    </section>
  );
};

export default Capabilities;
