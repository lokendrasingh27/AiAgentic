import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// Single-file React component converted from the provided HTML+JS
// - Filename suggestion: EndUserBenefits.jsx
// - Requires Tailwind CSS configured in the project (colors used in original tailwind.config)
// - Place images at the same relative paths used in the original code (e.g. agentic_images/...)

export default function EndUserBenefits() {
  // Icons (SVG strings) — kept as HTML strings for attachment-pill rendering
  const icons = {
    voice: `<svg  xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M10 2a2 2 0 00-2 2v6a2 2 0 004 0V4a2 2 0 00-2-2z\"/><path fill-rule=\"evenodd\" d=\"M5 10a5 5 0 0010 0H5z\" clip-rule=\"evenodd\"/><path d=\"M10 18a7 7 0 007-7h-2a5 5 0 11-10 0H3a7 7 0 007 7z\"/></svg>`,
    video: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 20 10\" fill=\"currentColor\"><path d=\"M6 4a2 2 0 00-2 2v8a2 2 0 002 2h5.586a2 2 0 001.414-.586L17 12.414V4a2 2 0 00-2-2H6z\"/><path d=\"M17 8l3 3-3 3V8z\" fill=\"#0f4c75\"/></svg>`,
    document: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H4z\"/><path d=\"M8 12h4v1H8v-1zM8 14h4v1H8v-1zM8 9h2v1H8V9z\" fill=\"#0f4c75\"/></svg>`,
    image: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7.414a2 2 0 00-.586-1.414l-4.414-4.414A2 2 0 0010.586 1H5a2 2 0 00-2 2zM5 15l3-4 2 3 3-4 3 5H5z\" clip-rule=\"evenodd\" /></svg>`,
    link: `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" viewBox=\"0 0 20 20\" fill=\"currentColor\"><path fill-rule=\"evenodd\" d=\"M12.293 6.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l4-4z\" clip-rule=\"evenodd\" /><path fill-rule=\"evenodd\" d=\"M6 10a3 3 0 00-3 3v4a1 1 0 002 0v-4a1 1 0 011-1h4a1 1 0 010 2H6v4a1 1 0 01-2 0v-4a3 3 0 013-3h4a3 3 0 013 3v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4a3 3 0 013-3h4a3 3 0 010 6H6\" clip-rule=\"evenodd\" /></svg>`
  };

  // industries data copied from your HTML/JS (kept identical)
  const industriesData = [
    {
      key: "doctors",
      name: "Doctors & Clinics",
      description:
        "Digest lab reports, track vitals, schedule appointments and provide actionable guidance for everyday health.",
      icon: "/logos/doctor.png",
      features: [
        "Summarise lab reports into clear action items",
        "Monitor vitals and hydration trends",
        "Automate appointment scheduling and reminders"
      ],
      conversation: [
        { sender: "user", type: "document", text: "I’ve uploaded my blood test PDF. Can you summarise the key findings?", time: "09:00" },
        { sender: "ai", type: "text", text: "Your LDL cholesterol is slightly high and vitamin D is low. You may need to reduce saturated fats and increase sun exposure or supplementation.", time: "09:02" },
        { sender: "user", type: "voice", text: "I feel tired and have frequent headaches. Is this related?", time: "09:04" },
        { sender: "ai", type: "text", text: "Fatigue and headaches can be linked to iron deficiency or dehydration. Let’s check your iron levels and review your hydration habits.", time: "09:06" },
        { sender: "user", type: "text", text: "When is my next appointment with Dr. Rao?", time: "09:08" },
        { sender: "ai", type: "text", text: "Your next consultation is on November 5th at 11am. I’ll send you a reminder a day before.", time: "09:10" }
      ]
    },
    {
      key: "gynecology",
      name: "Gynecology & Women’s Health",
      description:
        "Track cycles, log meals and symptoms, ask questions about hormonal changes and receive personalised lifestyle guidance.",
      icon: "/logos/gyneo.png",
      features: [
        "Monitor cycles and symptoms over time",
        "Provide phase‑based nutrition and lifestyle advice",
        "Identify irregular patterns for early intervention"
      ],
      conversation: [
        { sender: "user", type: "voice", text: "Audio note: I feel nauseated in the mornings. Is this normal at this phase of my cycle?", time: "09:00" },
        { sender: "ai", type: "text", text: "Nausea can occur due to progesterone fluctuations in the luteal phase. Keeping a meal and symptom log will help identify patterns.", time: "09:02" },
        { sender: "user", type: "image", text: "Here’s my cycle tracking chart. Any observations?", time: "09:04" },
        { sender: "ai", type: "text", text: "Your cycles are regular at 28 days but your luteal phase is slightly short at 10 days. Consider discussing progesterone support with your doctor.", time: "09:06" },
        { sender: "user", type: "text", text: "What foods should I eat to support my hormones today?", time: "09:08" },
        { sender: "ai", type: "text", text: "Focus on complex carbs, lean proteins and magnesium-rich foods like bananas, pumpkin seeds and leafy greens.", time: "09:10" }
      ]
    },
    // ... remaining industries trimmed for brevity in this code block but included below
  ];

  // Append the remaining data from your original code (kept identical) — to keep this file concise in editor view
  // In practice we include all industry objects as in the provided HTML. For this component we'll merge them programmatically:
  const remaining = [
    {
      key: "fertility",
      name: "Fertility Clinics",
      description:
        "Collects cycle history, monitors nutrition and sleep, interprets charts and supports preconception planning.",
      icon: "/logos/fertility.png",
      features: [
        "Interpret fertility charts and BBT patterns",
        "Provide stress‑management and sleep guidance",
        "Recommend supplements and dietary support"
      ],
      conversation: [
        { sender: "user", type: "image", text: "Uploaded my basal body temperature chart. Can you interpret it?", time: "09:00" },
        { sender: "ai", type: "text", text: "Your temperature rise indicates ovulation around day 14. Your luteal phase appears adequate at 12 days.", time: "09:02" },
        { sender: "user", type: "voice", text: "Voice note: I’m feeling stressed about the process. Any tips?", time: "09:04" },
        { sender: "ai", type: "text", text: "Stress can impact fertility. Try mindful breathing and light yoga, and ensure you get at least 7 hours of sleep.", time: "09:06" },
        { sender: "user", type: "text", text: "Which supplements should I focus on?", time: "09:08" },
        { sender: "ai", type: "text", text: "Consider prenatal vitamins with folate, iron and omega-3s. Always consult your doctor before starting new supplements.", time: "09:10" }
      ]
    },
    {
      key: "fitness",
      name: "Fitness Influencers",
      description:
        "Log meals, plan workouts, get macro breakdowns and video feedback to improve form and results.",
      icon: "/logos/fitness.png",
      features: [
        "Create personalised macro targets",
        "Analyse workout form through video",
        "Auto‑log meals and provide nutritional feedback"
      ],
      conversation: [
        { sender: "user", type: "voice", text: "Audio: What macros should I aim for if I’m cutting weight?", time: "09:00" },
        { sender: "ai", type: "text", text: "Aim for 40% protein, 30% carbs and 30% fats. We’ll adjust as your progress continues.", time: "09:02" },
        { sender: "user", type: "video", text: "Video: Here’s my squat form from today’s workout. Any feedback?", time: "09:04" },
        { sender: "ai", type: "text", text: "Keep your knees tracking over your toes and engage your core throughout the movement. Try sitting back further into your heels.", time: "09:06" },
        { sender: "user", type: "text", text: "Can you log my meals for today?", time: "09:08" },
        { sender: "ai", type: "text", text: "Breakfast: Greek yogurt & berries (20g protein), Lunch: Grilled chicken & quinoa (35g protein), Snack: Almonds (7g protein). Feel free to add dinner later.", time: "09:10" }
      ]
    },
    {
      key: "trainers",
      name: "Trainers & Personal Coaching",
      description:
        "Onboards clients, plans sessions, monitors recovery and keeps clients accountable with personalised coaching.",
      icon: "/logos/trainer.png",
      features: [
        "Automate client onboarding and session scheduling",
        "Provide real‑time form feedback from video",
        "Monitor soreness and recovery to adjust training"
      ],
      conversation: [
        { sender: "user", type: "voice", text: "Voice: My muscles are sore after yesterday’s session. Should I rest or train?", time: "09:00" },
        { sender: "ai", type: "text", text: "Rest is key for muscle recovery. Try light stretching and foam rolling today.", time: "09:02" },
        { sender: "user", type: "video", text: "Video of my deadlift form. Do you see any corrections?", time: "09:04" },
        { sender: "ai", type: "text", text: "You’re rounding your back at the bottom. Keep your spine neutral and push through your heels.", time: "09:06" },
        { sender: "user", type: "text", text: "When is my next coaching session?", time: "09:08" },
        { sender: "ai", type: "text", text: "Your next session is on Monday at 7am. We’ll focus on upper body strength.", time: "09:10" }
      ]
    },
    {
      key: "gym",
      name: "Gym Owners",
      description: "Automate class schedules, send event reminders and provide personalised communications to members.",
      icon: "/logos/gym.png",
      features: [
        "Automate class schedules and bookings",
        "Send reminders and promote events",
        "Personalise communications and connect members to services"
      ],
      conversation: [
        { sender: "user", type: "text", text: "What classes are available this week?", time: "09:00" },
        { sender: "ai", type: "text", text: "Yoga Monday 6pm, HIIT Tuesday 7pm, Spin Wednesday 8pm. Would you like to book one?", time: "09:02" },
        { sender: "user", type: "text", text: "Any special events coming up?", time: "09:04" },
        { sender: "ai", type: "text", text: "A nutrition workshop is scheduled for Saturday at noon. Click here to register.", time: "09:06" },
        { sender: "user", type: "voice", text: "Voice: I’m interested in personal training. How do I start?", time: "09:08" },
        { sender: "ai", type: "text", text: "I can connect you with our top trainer. She’ll reach out to schedule a consultation.", time: "09:10" }
      ]
    },
    {
      key: "sports",
      name: "Sports & Development Centres",
      description: "Analyse training loads, offer drills, monitor progress and prevent injuries for athletes.",
      icon: "/logos/sport.png",
      features: [
        "Analyse athlete performance and technique",
        "Recommend drills and injury‑prevention tips",
        "Monitor progress and readiness scores"
      ],
      conversation: [
        { sender: "user", type: "video", text: "Video: My sprint practice today. Can you analyse it?", time: "09:00" },
        { sender: "ai", type: "text", text: "Your stride length improved and turnover increased. Next, focus on explosive starts.", time: "09:02" },
        { sender: "user", type: "text", text: "What drills can I do to improve agility?", time: "09:04" },
        { sender: "ai", type: "text", text: "Incorporate ladder and cone drills with lateral movements.", time: "09:06" },
        { sender: "user", type: "voice", text: "Voice: How do I reduce the risk of shin splints?", time: "09:08" },
        { sender: "ai", type: "text", text: "Increase ankle mobility, strengthen your calves and ensure proper footwear.", time: "09:10" }
      ]
    },
    {
      key: "supplement",
      name: "Supplement Companies",
      description: "Guide users on combining supplements with whole foods, track intake and optimise nutrition plans.",
      icon: "/logos/supplements.png",
      features: [
        "Track daily protein and macro intake",
        "Suggest whole‑food alternatives to supplements",
        "Optimise nutrition plans for specific goals"
      ],
      conversation: [
        { sender: "user", type: "text", text: "I took my protein shake today. How much more protein do I need?", time: "09:00" },
        { sender: "ai", type: "text", text: "Aim for 1.2g of protein per kg of body weight. You still need 40g for today.", time: "09:02" },
        { sender: "user", type: "image", text: "Photo: Here’s my lunch. Does this meet my macros?", time: "09:04" },
        { sender: "ai", type: "text", text: "That meal provides 25g of protein and 30g of carbs. Add a handful of nuts to boost healthy fats.", time: "09:06" },
        { sender: "user", type: "voice", text: "Voice: Any alternative sources of protein besides powder?", time: "09:08" },
        { sender: "ai", type: "text", text: "Yes! Consider eggs, chickpeas, lentils, tofu and Greek yogurt as whole food sources.", time: "09:10" }
      ]
    },
    {
      key: "wearable",
      name: "Wearables & Device OEMs",
      description: "Translate HRV, sleep and activity data into meaningful insights and daily recommendations.",
      icon: "/logos/.png",
      features: [
        "Summarise sleep, HRV and readiness scores",
        "Provide recovery and breathing tips based on trends",
        "Transform raw data into simple daily actions"
      ],
      conversation: [
        { sender: "user", type: "text", text: "How did I sleep last night?", time: "09:00" },
        { sender: "ai", type: "text", text: "You slept 7h 30m with 1h 45m deep sleep. Your readiness score is 80. Focus on winding down earlier.", time: "09:02" },
        { sender: "user", type: "voice", text: "Voice: I felt tired after my run. Any tips for recovery?", time: "09:04" },
        { sender: "ai", type: "text", text: "Hydrate, stretch and consume electrolytes. A light walk and cold shower can help recovery.", time: "09:06" },
        { sender: "user", type: "image", text: "Screenshot: My HRV graph from today.", time: "09:08" },
        { sender: "ai", type: "text", text: "Your HRV dipped mid-afternoon. Consider a 5-minute breathing exercise to reset.", time: "09:10" }
      ]
    },
    {
      key: "insurance",
      name: "Insurance Companies",
      description: "Reward healthy behaviour, deliver lifestyle summaries and empower users to earn benefits for staying active.",
      icon: "/logos/inssurance.png",
      features: [
        "Track wellness points and activity rewards",
        "Suggest activities to maximise rewards",
        "Provide lifestyle summaries for insurers"
      ],
      conversation: [
        { sender: "user", type: "text", text: "How many wellness points have I earned this month?", time: "09:00" },
        { sender: "ai", type: "text", text: "You’ve earned 320 points from steps, workouts and sleep. Keep it up to unlock premium discounts.", time: "09:02" },
        { sender: "user", type: "voice", text: "Voice: How can I maximise my points next month?", time: "09:04" },
        { sender: "ai", type: "text", text: "Aim for 10,000 steps daily and maintain a sleep average of 7+ hours.", time: "09:06" },
        { sender: "user", type: "document", text: "Uploaded my activity report. Does it meet the criteria?", time: "09:08" },
        { sender: "ai", type: "text", text: "Yes! You’re on track. I’ll submit this to your insurer to update your rewards.", time: "09:10" }
      ]
    },
    {
      key: "pharma",
      name: "Pharma Companies",
      description: "Educate users on their medications, monitor adherence and provide lifestyle tips for optimal outcomes.",
      icon: "/logos/pharma.png",
      features: [
        "Summarise medication instructions clearly",
        "Identify side effects and safety tips",
        "Recommend lifestyle adjustments to support treatment"
      ],
      conversation: [
        { sender: "user", type: "document", text: "Here are my medication instructions. Can you summarise them?", time: "09:00" },
        { sender: "ai", type: "text", text: "Take one pill after breakfast daily. Avoid alcohol and drink plenty of water.", time: "09:02" },
        { sender: "user", type: "voice", text: "Voice: I’m experiencing dizziness. Is this a side effect?", time: "09:04" },
        { sender: "ai", type: "text", text: "Mild dizziness can occur. Ensure you’re eating before taking your medicine and consult your doctor if symptoms persist.", time: "09:06" },
        { sender: "user", type: "text", text: "Any lifestyle adjustments I should make?", time: "09:08" },
        { sender: "ai", type: "text", text: "Maintain a balanced diet, moderate exercise and take your medication at the same time each day.", time: "09:10" }
      ]
    }
  ];

  // merge arrays
  const industries = [...industriesData, ...remaining];

  // component state
  const [currentKey, setCurrentKey] = useState(industries[0].key);
  const sliderRef = useRef(null);

  useEffect(() => {
    // update progress bar and render will happen via JSX mapping
    // keep keyboard handlers for slider accessibility
    const slider = sliderRef.current;
    if (!slider) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        slider.scrollBy({ left: 220, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        slider.scrollBy({ left: -220, behavior: "smooth" });
      }
    };
    slider.addEventListener("keydown", onKey);
    return () => slider.removeEventListener("keydown", onKey);
  }, []);

  // helper to render attachment/html safely
  function renderAttachment(type, text) {
    const svg = icons[type] || "";
    // escape text (very small helper)
    const escaped = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return (
      <span
        className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 text-sm"
        dangerouslySetInnerHTML={{ __html: `${svg}<span>${escaped}</span>` }}
      />
    );
  }

  const activeIndex = industries.findIndex((i) => i.key === currentKey);

  return (
    <div className="min-h-screen   p-4" id="benifits" style={{
        color: "white",
    
    }}>
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
      <main className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-">
        {/* Hero */}
        <section className="px-6 lg:px-10 py-6 text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-3">Empower Every User with Intelligent Lifestyle Support</h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            LifestyleAI translates complex data from labs, wearables, diet logs and more into personalised guidance for every patient, client and customer. Discover the impact for each industry.
          </p>
        </section>

        {/* Slider */}
        <nav aria-label="Industry selector" className="px-6 lg:px-10 py-6 relative">
          <button
            aria-label="Scroll left"
            onClick={() => sliderRef.current?.scrollBy({ left: -220, behavior: "smooth" })}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-[#0A0810] transition shadow-soft z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.293 14.707a1 1 0 01-1.414 0L5.586 9.414a1 1 0 010-1.414l5.293-5.293a1 1 0 011.414 1.414L8.414 9l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
          </button>

          <div
            ref={sliderRef}
            tabIndex={0}
            role="tablist"
            aria-label="Industries"
            className="useCase py-2  overflow-x-auto snap-x snap-mandatory -mx-8 px-8 pb-2 flex gap-4 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {industries.map((industry, index) => {
              const isActive = industry.key === currentKey;
              return (
                <button
                  key={industry.key}
                  data-key={industry.key}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setCurrentKey(industry.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setCurrentKey(industry.key);
                    }
                  }}
                  className={`snap-start flex flex-col items-center justify-between p-4 rounded-2xl bg-[rgba(46,26,71,0.25)] border border-white/10 cursor-pointer w-40 shrink-0 transition-transform ${isActive ? "-translate-y-1.5 bg-[rgba(37,99,235,0.15)]" : "hover:-translate-y-1"}`}
                >
                  <img src={industry.icon} alt={industry.name} loading="lazy" className="h-16 w-16 object-contain mb-2 rounded-xl" />
                  <div className="text-xs font-medium text-center leading-tight">{industry.name}</div>
                </button>
              );
            })}
          </div>

          <button
            aria-label="Scroll right"
            onClick={() => sliderRef.current?.scrollBy({ left: 220, behavior: "smooth" })}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-[#0A0810] h transition shadow-soft z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L12.586 9l-6.293-6.293a1 1 0 111.414-1.414l7 7a1 1 0 010 1.414l-7 7z" clipRule="evenodd" /></svg>
          </button>

          {/* progress indicator */}
          <div className="mt-2 flex justify-center items-center gap-3 text-xs text-white/80">
            <div id="sliderProgressLabel">{activeIndex + 1}/{industries.length}</div>
            <div className="relative flex-1 max-w-xs h-1 bg-[rgba(46,26,71,0.5)] rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-[rgba(0,245,212,1)]" style={{ width: `${((activeIndex + 1) / industries.length) * 100}%` }} />
            </div>
          </div>
        </nav>

        {/* Industry details + Chat */}
        <section className="px- lg:px-10 py-4">
          <div className="text-center mb-6">
            <h2 id="selectedTitle" className="text-2xl lg:text-3xl font-semibold mb-2">{industries[activeIndex].name}</h2>
            <p id="selectedDescription" className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base">{industries[activeIndex].description}</p>
            <div id="inlineCTA" className={`mt-4 ${true ? "block" : "hidden"}`}>
             <motion.a
            href="#demo"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white"
          >
           Book a Demo <span>→</span>
          </motion.a>
            </div>
          </div>

          <div className="max-w-4xl overflow-hidden mx-auto">
            <div id="featureList" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-sm">
              {industries[activeIndex].features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.414-5.414l-2.122-2.122a1 1 0 10-1.414 1.414l2.829 2.829a1 1 0 001.414 0l5.657-5.657a1 1 0 00-1.414-1.414L8.586 12.586z" clipRule="evenodd"/></svg>
                  <span className="text-white text-sm leading-6">{feat}</span>
                </div>
              ))}
            </div>

            <div className="relative bg-[#0A0810] border border-white/10 rounded-3xl p-6 shadow-soft">
              <div id="chatContainer" className="mb-4 space-y-3">
                {industries[activeIndex].conversation.map((msg, idx) => {
                  const isUser = msg.sender === "user";
                  return (
                    <div key={idx} className={`flex items-start gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
                      {isUser ? (
                        <>
                          <div className="max-w-[70%] px-4 py-2 rounded-[1rem] fle bg-[#1F1929] text-white relative break-words text-sm">
                            {msg.type && msg.type !== 'text' ? (
                              <div className="flex gap-2 text-sm items-end" dangerouslySetInnerHTML={{ __html: `${icons[msg.type]}<span>${msg.text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>` }} />
                            ) : (
                              <>{msg.text}</>
                            )}
                            {msg.time && <div className="text-[0.675rem] text-white/60 mt-1 text-right">{msg.time}</div>}
                            <div className="absolute bottom-1 right-3 w-3 h-3 text-white" aria-hidden>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                            </div>
                          </div>
                          <div className="avatar user bg-[#C963A3] text-[rgba(11,21,35,1)] w-7 h-7 inline-flex items-center justify-center rounded-full font-semibold ml-2">U</div>
                        </>
                      ) : (
                        <>
                          <div className="avatar ai bg-[#A949DF] text-[rgba(11,21,35,1)] w-7 h-7 inline-flex items-center justify-center rounded-full font-semibold">A</div>
                          <div className="max-w-[70%] px-4 py-2 rounded-[1rem] bg-[rgba(255,255,255,0.12)] text-white break-words text-sm">
                            {msg.type && msg.type !== 'text' ? (
                              <div dangerouslySetInnerHTML={{ __html: `${icons[msg.type]}<span>${msg.text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>` }} />
                            ) : (
                              <>{msg.text}</>
                            )}
                            {msg.time && <div className="text-[0.675rem] text-white/60 mt-1 text-right">{msg.time}</div>}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Input row (disabled as original) */}
              <div className="flex items-center gap-3">
                <div className="hidden lg:block">
                  <button className="p-2 rounded-lg bg-[rgba(15,76,117,0.4)] hover:bg-[rgba(15,76,117,0.6)] transition" aria-label="Record a voice note">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgba(0,245,212,1)]" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a2 2 0 00-2 2v6a2 2 0 004 0V4a2 2 0 00-2-2z" /><path fillRule="evenodd" d="M5 10a5 5 0 0010 0H5z" clipRule="evenodd" /><path d="M10 18a7 7 0 007-7h-2a5 5 0 11-10 0H3a7 7 0 007 7z" /></svg>
                </button>
                <button className="p-2 rounded-lg bg-[rgba(15,76,117,0.4)] hover:bg-[rgba(15,76,117,0.6)] transition" aria-label="Record a video">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgba(0,245,212,1)]" viewBox="0 0 20 20" fill="currentColor"><path d="M6 4a2 2 0 00-2 2v8a2 2 0 002 2h5.586a2 2 0 001.414-.586L17 12.414V4a2 2 0 00-2-2H6z" /><path d="M17 8l3 3-3 3V8z" fill="#0f4c75" /></svg>
                </button>
                <button className="p-2 rounded-lg bg-[rgba(15,76,117,0.4)] hover:bg-[rgba(15,76,117,0.6)] transition" aria-label="Upload a document">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgba(0,245,212,1)]" viewBox="0 0 20 20" fill="currentColor"><path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H4z" /><path d="M8 12h4v1H8v-1zM8 14h4v1H8v-1zM8 9h2v1H8V9z" fill="#0f4c75" /></svg>
                </button>
                <button className="p-2 rounded-lg bg-[rgba(15,76,117,0.4)] hover:bg-[rgba(15,76,117,0.6)] transition" aria-label="Share a link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[rgba(0,245,212,1)]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.293 6.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l4-4z" clipRule="evenodd" /><path fillRule="evenodd" d="M6 10a3 3 0 00-3 3v4a1 1 0 002 0v-4a1 1 0 011-1h4a1 1 0 010 2H6v4a1 1 0 01-2 0v-4a3 3 0 013-3h4a3 3 0 013 3v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4a3 3 0 013-3h4a3 3 0 010 6H6" clipRule="evenodd" /></svg>
                </button>
                </div>

                <input type="text" placeholder="Type a message…" disabled className="flex-1 bg-[rgba(15,76,117,0.3)] border border-white/15 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[rgba(0,245,212,0.5)] text-white" />
                <button className="p-3 rounded-full bg-[#101828] hover:bg-[rgba(32,201,151,1)] transition text-[rgba(15,76,117,1)]" aria-label="Send" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.94 2.94a1.5 1.5 0 012.12 0L18 15.88a1.5 1.5 0 01-1.06 2.56H3.5a1.5 1.5 0 01-1.5-1.5V4a1.5 1.5 0 011.06-1.06l.38-.37z" /></svg>
                </button>
              </div>
            </div>
          </div>
        </section>

                {/* //cta section */}
                <section className="px-6 lg:px-10 py-1 text-center">
<h2 className="text-2xl lg:text-3xl font-semibold mb-3">Transform How People Experience Health &amp; Wellness</h2>
<p className="text-white/80 max-w-2xl mx-auto mb-6">
From cycle tracking to workout feedback, from lab reports to wearable insights — empower your users with context-aware guidance that integrates into their daily lives.
</p>
 <motion.a
                            href="#demo"
                            whileHover={{ y: -3, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white"
                          >
                           Request a Demo <span>→</span>
                          </motion.a>
</section>
      </main>
    </div>
  );
}
