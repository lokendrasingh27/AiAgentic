// src/components/DIYAgentPortal.jsx
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const industriesData = [
  { key: "Doctors & Clinics", name: "Doctors & Clinics", img: "/logos/doctor.png" },
  { key: "Gynecology & Women’s Health", name: "Gynecology & Women’s Health", img: "/logos/gyneo.png" },
  { key: "Fertility Clinics", name: "Fertility Clinics", img: "/logos/fertility.png" },
  { key: "Fitness Influencers", name: "Fitness Influencers", img: "/logos/fitness.png" },
  { key: "Trainers", name: "Trainers", img: "/logos/trainer.png" },
  { key: "Gym Owners", name: "Gym Owners", img: "/logos/gym.png" },
  { key: "Sports & Development Centres", name: "Sports & Development Centres", img: "/logos/sport.png" },
  { key: "Supplement Companies", name: "Supplement Companies", img: "/logos/supplements.png" },
  { key: "Wearables & Device OEMs", name: "Wearables & Device OEMs", img: "/logos/.png" },
  { key: "Insurance Companies", name: "Insurance Companies", img: "/logos/inssurance.png" },
  { key: "Pharma Companies", name: "Pharma Companies", img: "/logos/pharma.png" },
  
];

const agentsInitial = [
  // Core
  { name: "Data Agent", category: "Core", checked: false },
  { name: "Interviewing Agent", category: "Core", checked: false },
  { name: "Engagement Agent", category: "Core", checked: true },
  { name: "Retention Agent", category: "Core", checked: false },
  // Growth & Operations
  { name: "Upsell & Cross-Sell Agent", category: "Growth", checked: false },
  { name: "Payment Agent", category: "Growth", checked: false },
  { name: "Insight Agent", category: "Growth", checked: false },
  { name: "Compliance Agent", category: "Growth", checked: false },
  // Quality & Knowledge
  { name: "Data Validation Agent", category: "Quality", checked: false },
  { name: "Notification Agent", category: "Quality", checked: false },
  { name: "Brand Voice Agent", category: "Quality", checked: false },
 
];

export default function DIYAgentPortal() {
  // UI state
  const [industries] = useState(industriesData);
  const [activeIndustry, setActiveIndustry] = useState(null);

  // Agents state (Map: name -> category). We'll also keep an array for rendering toggles
  const [agents, setAgents] = useState(agentsInitial);

  // step indicates which step is highlighted (1..4)
  const [step, setStep] = useState(1);

  // refs for slider and arrow buttons
  const sliderRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // compute selectedAgents derived state
  const selectedAgents = agents.filter(a => a.checked);

  // effect: when user selects industry, move to step 2 (highlight)
  useEffect(() => {
    if (activeIndustry) setStep(2);
  }, [activeIndustry]);

  // slider scroll handler to show/hide arrows
  useEffect(() => {
    const slider = sliderRef.current;
    const prevBtn = prevRef.current;
    const nextBtn = nextRef.current;
    if (!slider || !prevBtn || !nextBtn) return;

    function updateSliderButtons() {
      const scrollLeft = slider.scrollLeft;
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      if (scrollLeft > 10) prevBtn.classList.remove("hidden");
      else prevBtn.classList.add("hidden");
      if (scrollLeft < maxScroll - 10) nextBtn.classList.remove("hidden");
      else nextBtn.classList.add("hidden");
    }

    // initial
    updateSliderButtons();
    slider.addEventListener("scroll", updateSliderButtons);
    window.addEventListener("resize", updateSliderButtons);

    return () => {
      slider.removeEventListener("scroll", updateSliderButtons);
      window.removeEventListener("resize", updateSliderButtons);
    };
  }, []);

  // handlers
  const selectIndustry = (key) => {
    setActiveIndustry(key);
    setStep(2); // same as highlightStep(2)
  };

  const scrollSlider = (dir = "right") => {
    const slider = sliderRef.current;
    if (!slider) return;
    const amount = 200;
    slider.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const toggleAgent = (name) => {
    setAgents(prev => {
      const next = prev.map(a => (a.name === name ? { ...a, checked: !a.checked } : a));
      // when first change occurs, move to step 3
      setStep(3);
      return next;
    });
  };

  const handleBuild = () => {
    // simple demo action: show what would be built
    const payload = {
      business: activeIndustry || null,
      selectedAgents: selectedAgents.map(a => ({ name: a.name, category: a.category }))
    };
    // preserve UI: steps highlight to 4 as user proceeds to build
    setStep(4);
    alert("Build started — payload:\n" + JSON.stringify(payload, null, 2));
  };

  // grouping agents by category for rendering
  const grouped = agents.reduce((acc, a) => {
    if (!acc[a.category]) acc[a.category] = [];
    acc[a.category].push(a);
    return acc;
  }, {});

  return (
    <div className="min-h-screen text-white overflow-hidden p-4 selection:bg-brand-500/40 selection:text-white">
      <Link to='/'>
                <motion.a
                   href="#"
                   whileHover={{ y: -3, scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="inline-flex items-center  rounded-full px-2 py-2 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white"
                 >
                  <FaArrowLeft /> <span></span>
                 </motion.a>
                </Link> {/* Inline original CSS block to preserve exact look */}
 {/* <Header /> */}
      <style>{`
        /* Dark gradient background with subtle overlays for depth */
        body {
          background:
            radial-gradient(900px 600px at 0% 0%, rgba(0,180,216,0.25), transparent 70%),
            radial-gradient(700px 500px at 100% 0%, rgba(46,26,71,0.35), transparent 65%),
            linear-gradient(180deg, #0B1523 0%, #101726 100%);
        }
        /* Hide scrollbars on horizontal sliders */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        /* Slider card styling */
        .industry-card {
          @apply relative flex flex-col items-center justify-center px-4 py-5 w-40 shrink-0 bg-white/10 backdrop-blur rounded-2xl border border-white/10 cursor-pointer transition transform;
        }
        .industry-card.active { @apply bg-mint text-brand-900 shadow-soft; }
        .industry-card img { @apply h-12 w-12 mb-2 rounded-lg; }
        /* Agent toggle track/thumb styling */
        .toggle:checked + .track { background-color: rgba(0,245,212,0.35); }
        .toggle:checked + .track .thumb { transform: translateX(110%); }
        /* Diagram grid pattern */
        .grid-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at center, rgba(255,255,255,0.05) 2px, transparent 2px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        /* Node style for selected agents in diagram */
        .node { @apply absolute flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold cursor-default; }
        .node[data-category="Core"] { background-color: rgba(0,245,212,0.7); color: #0B1523; }
        .node[data-category="Growth"] { background-color: rgba(255,214,0,0.7); color: #0B1523; }
        .node[data-category="Quality"] { background-color: rgba(154,76,149,0.65); color: white; }
        .node[data-category="Knowledge"] { background-color: rgba(72,202,228,0.65); color: white; }
        /* Orbit ring */
        .orbit-ring { @apply absolute rounded-full border border-white/10; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py- space-y-10">
        {/* Header */}
        <header className="flex items-center flex-col justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-center mb-3">DIY Agent Portal</h1>
          <p className="max-w-3xl text-white/80 text-center">
            Build your own AI suite in minutes. Choose your business type, pick the agents that suit your workflow, see your architecture take shape, then upload your data sources.
          </p>
        </header>

        {/* Progress bar */}
        <nav aria-label="Workflow steps bg-[#1F1929]" className="mb-8">
          <ol className="flex justify-between text-sm  font-medium">
            {[1,2,3,4].map(i => (
              <li key={i} className="flex-1 ">
                <div className="flex items-center  justify-center flex-col text-center">
                  <span
                    id={`stepIndicator${i}`}
                    className={`w-8 h-8 flex items-center justify-center rounded-full border ${step >= i ? "bg-gradient-to-r from-[#4E7CEA]/40 via-[#4ECCA3]/40 to-[#4E7CEA]/40 text-brand-800" : "border-white/30"}`}
                  >
                    {i}
                  </span>
                  <span className="mt-1 text-white/70">
                    { i === 1 ? "Business" : i === 2 ? "Agents" : i === 3 ? "Diagram" : "Upload"}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Step 1 */}
        <section id="step1" className="space-y-4 flex  flex-col items-center justify-center">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span className="inline-flex text-center items-center justify-center w-6 h-6 rounded-full bg-mint/20 text-mint text-xs font-bold">1</span>
            Select your business type
          </h2>
          <p className="text-sm text-white/70 mb-2">Choose the sector you operate in. This helps us tailor the agent suggestions and workflows.</p>

          <div className="relative w-full max-w-5xl mx-auto ">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  
                  slidesPerView={3}
                  navigation
                  
                   
                  direction="horizontal" // 👉 change to "vertical" for up-down movement
                  breakpoints={{
                    340: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 7 },
                  }}
                  className="rounded-xl bg-[#0A0810] "
                >
                  {industries.map((ind) => (
                    <SwiperSlide key={ind.key} className="">
                      <div
                       key={ind.key}
                  data-key={ind.key}
                  onClick={() => selectIndustry(ind.key)}

                      className="bg-[#1F1 rounded-xl p-2 flex flex-col py-4 items-center hover:bg-[#1F1929] transition cursor-pointer">
                        <img
                          src={ind.img}
                          alt={ind.name}
                          className="h-28 w-24 rounded-xl object-cover w-40 mb-2"
                        />
                        <span className="text-white/90 text-center text-sm">{ind.name}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
          
                {/* optional custom buttons if you want */}
                <style>{`
  .swiper-button-next,
  .swiper-button-prev {
    width: 30px !important;
    height: 30px !important;
    background-color: white !important;
    color: black !important;
    border-radius: 9999px !important;
    font-weight: 1100 !important;   /* bold arrow */
    font-size: 16px !important;    /* adjust arrow size inside */
    transition: all 0.3s ease;
    padding: 4px !important;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-weight: 900 !important;   /* makes arrow thicker */
    font-size: 14px !important;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background-color: #f3f3f3 !important; /* subtle hover effect */
    transform: scale(1.1);
  }
`}</style>
              </div>

          <p id="businessSelection" className="text-sm text-white/70">
            Selected: <span className="font-medium">{activeIndustry || "None"}</span>
          </p>
        </section>

        {/* Step 2: Agents */}
        <section id="step2" className="space-y-4">
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold text-center flex items-center gap-2">
            <span className="inline-flex text-center items-center justify-center w-6 h-6 rounded-full bg-mint/20 text-mint text-l font-bold">2</span>
            Select AI Agents
          </h2>
          <p className="text-sm text-white/70">Toggle the agents you need. Categories can be collapsed to focus on relevant sections.</p>
        </div>

          <div className="space-y-3">
            {Object.keys(grouped).map(category => (
              <details key={category} open className="rounded-2xl bg-[#0A0810] backdrop-blur border border-white/10 shadow-soft p-4">
                <summary className="cursor-pointer font-semibold text-white/80">{category}</summary>
                <div className="mt-3 space-y-3">
                  {grouped[category].map(a => (
                    <div key={a.name} className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold">{a.name}</div>
                        <div className="text-sm text-white/70">
                          {/* replicate short descriptions from original where possible */}
                          {a.name.includes("Data") && "Collects forms, files and device streams."}
                          {a.name.includes("Interview") && "Structured onboarding and triage."}
                          {a.name.includes("Engagement") && "Nudges, streaks and reminders."}
                          {a.name.includes("Retention") && "Prevents drop off with proactive actions."}
                          {a.name.includes("Upsell") && "Offers relevant plans and products."}
                          {a.name.includes("Payment") && "Collects payments securely in chat."}
                          {a.name.includes("Insight") && "Finds trends across lifestyle and clinical data."}
                          {a.name.includes("Compliance") && "Tracks consent, logs and audit trails."}
                          {a.name.includes("Validation") && "Validates inputs and detects anomalies."}
                          {a.name.includes("Notification") && "Schedules reminders and alerts."}
                          {a.name.includes("Brand Voice") && "Ensures tone and messaging are on brand."}
                          {a.name.includes("Knowledge") && "Answers using your private knowledge base."}
                        </div>
                      </div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="toggle hidden"
                          data-agent={a.name}
                          data-category={a.category}
                          checked={a.checked}
                          onChange={() => toggleAgent(a.name)}
                        />
                        <span className="track relative w-12 h-6 overflow-hidden rounded-full bg-white/15 transition-colors">
                          <span className={`thumb absolute left-0.5 top-0.5 w-5 h-5 rounded-full  bg-white transition-transform ${a.checked ? "translate-x-[10%]" : ""}`}></span>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Step 3: Visualise workflow */}
        <section id="step3" className="space-y-4">
         <div className="flex flex-col items-center justify-center">
 <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint/20 text-mint tex font-bold">3</span>
            Visualise your workflow
          </h2>
          <p className="text-sm text-white/70">As you toggle agents, they appear below around the shared memory core.</p> 
         </div>

          <div className="rounded-3xl bg-[#0A0810] backdrop-blur border border-white/10 shadow-soft p-6 flex flex-col">
            <div className="relative rounded-2xl border bg-[url('/images/bg2.gif')] bg-cover bg-center border-white/10 bg-white/5 p-5 flex-1 min-h-[320px] grid-bg">
              {/* Center node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                {/* <div className="px-4 py-2 rounded-full bg-brand-700/70 border border-white/10 shadow-soft">
                  <span className="text-sm font-semibold">Memory Core</span>
                </div> */}
                <div className="mt-2 text-xs text-white/70"></div>
              </div>

              {/* Agent chips placed in a simple layout around center */}
              <div id="agentCloud" className="flex flex-wrap gap-3  relative z-10">
                {selectedAgents.map((a, idx) => (
                  <div
                    key={a.name}
                    className="px-3 py-1 rounded-full bg-black bg-brand-700/80 border border-white/15 text-sm font-medium whitespace-nowrap"
                    role="status"
                  >
                    {a.name}
                  </div>
                ))}
              </div>
            </div>

            <p id="selectedCount" className="mt-4 text-sm text-center text-white/80">
              Selected agents: <span className="font-semibold">{selectedAgents.length}</span>
            </p>
          </div>
        </section>

        {/* Step 4: Upload */}
        <section id="step4" className="space-y-4">
         <div className="flex flex-col items-center justify-center">
           <h2 className="text-2xl font-semibold flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint/20 text-mint te font-bold">4</span>
            Upload your knowledge
          </h2>
          <p className="text-sm text-white/70">Add the data sources your agents should learn from. Drag and drop files onto the cards or use the file pickers.</p>
         </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Text */}
            <div className="rounded-2xl bg-[#0A0810] w-90 h-64 backdrop-blur border border-white/10 shadow-soft p-4 dropzone" data-type="text">
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-6 w-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 5h16M4 12h16M4 19h16"/></svg>
                <div className="font-semibold">Text</div>
              </div>
              <p className="text-sm text-white/70 mb-3">Paste or upload plain text files (.txt, .md, .docx).</p>
              <textarea className="w-full h-24 rounded-xl bg-white/10 border border-white/15 p-3 text-white focus:outline-none focus:ring-2 focus:ring-mint/40 placeholder-white/60" placeholder="Paste text here..." />
              <input type="file" accept=".txt,.doc,.docx,.md" className="mt-3 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-mint/20 file:px-3 file:py-2 file:text-white hover:file:bg-mint/30" />
            </div>

            {/* Voice */}
            <div className="rounded-2xl bg-[#0A0810] w-90 h-64 backdrop-blur border border-white/10 shadow-soft p-4 dropzone" data-type="voice">
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-6 w-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14a3 3 0 003-3V5a3 3 0 10-6 0v6a3 3 0 003 3z"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><path d="M12 19v4"/><path d="M8 23h8"/></svg>
                <div className="font-semibold">Voice</div>
              </div>
              <p className="text-sm text-white/70 mb-3">Upload audio recordings (.wav, .mp3).</p>
              <input type="file" accept="audio/*" className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-mint/20 file:px-3 file:py-2 file:text-white hover:file:bg-mint/30" />
            </div>

            {/* Video */}
            <div className="rounded-2xl bg-[#0A0810] w-90 h-60 backdrop-blur border border-white/10 shadow-soft p-4 dropzone" data-type="video">
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-6 w-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14"/><rect width="14" height="10" x="1" y="7" rx="2" ry="2"/></svg>
                <div className="font-semibold">Video</div>
              </div>
              <p className="text-sm text-white/70 mb-3">Upload videos (.mp4, .mov).</p>
              <input type="file" accept="video/*" className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-mint/20 file:px-3 file:py-2 file:text-white hover:file:bg-mint/30" />
            </div>

            {/* Books & Docs */}
            <div className="rounded-2xl bg-[#0A0810] w-90 h-64 backdrop-blur border border-white/10 shadow-soft p-4 dropzone" data-type="books">
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-6 w-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17h11a2.5 2.5 0 012.5 2.5"/><path d="M4 4.5A2.5 2.5 0 016.5 2h11A2.5 2.5 0 0120 4.5"/><path d="M4 4.5v15"/><path d="M20 4.5v15"/><path d="M9 10h6"/><path d="M9 14h6"/></svg>
                <div className="font-semibold">Books &amp; Docs</div>
              </div>
              <p className="text-sm text-white/70 mb-3">Upload PDFs or ePubs (.pdf, .epub).</p>
              <input type="file" accept=".pdf,.epub" className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-mint/20 file:px-3 file:py-2 file:text-white hover:file:bg-mint/30" />
            </div>

            {/* Links */}
            <div className="rounded-2xl bg-[#0A0810] w-90 h-64 backdrop-blur border border-white/10 shadow-soft p-4 dropzone" data-type="links">
              <div className="flex items-center gap-3 mb-2">
                <svg className="h-6 w-6 text-mint" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 14L21 3"/><path d="M15 3h6v6"/><path d="M10 3H5a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2v-5"/></svg>
                <div className="font-semibold">External Links</div>
              </div>
              <p className="text-sm text-white/70 mb-3">Share a URL to a website, Google Drive link or Notion page.</p>
              <input type="url" placeholder="https://" className="w-full rounded-xl bg-white/10 border border-white/15 p-3 text-white focus:outline-none focus:ring-2 focus:ring-mint/40 placeholder-white/60" />
            </div>
          </div>
        </section>

        {/* Sticky build button */}
        <button
          id="buildButton"
          onClick={handleBuild}
          className="fixed bottom-8 right-8 bg-mint text-brand-800 bg-[#1F1929] z-99 font-semibold px-6 py-3 rounded-full shadow-soft hover:bg-mint/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mint"
        >
          Build My Agent Suite
        </button>
      </div>
    </div>
  );
}
