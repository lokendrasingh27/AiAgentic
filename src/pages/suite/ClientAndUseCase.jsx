import React, { useRef, useState } from "react";

const ClientAndUseCase = () => {
  const cards = [
    {
      img: "/logos/hospital.jpg",
      title: "Doctors & Clinics",
      desc: "Automate intake, adherence and follow-ups—freeing doctors from repetitive tasks.",
    },
    {
      img: "/logos/gyneo.png",
      title: "Gynecology & Women’s Health",
      desc: "Personalised cycle tracking, PCOS insights and women’s health coaching.",
    },
    {
      img: "/logos/fertility.jpg",
      title: "Fertility Clinics",
      desc: "Streamline lifestyle tracking from preconception to IVF and beyond.",
    },
    {
      img: "/logos/fitness.jpg",
      title: "Fitness Influencers",
      desc: "Scale personalised coaching with AI-driven interviews, plans and accountability.",
    },
    {
      img: "/logos/.jpg",
      title: "Trainers",
      desc: "Automate client intake, personalised program design and progress tracking.",
    },
    {
      img: "/logos/gy.png",
      title: "Gym Owners",
      desc: "Transform your gym into a smart ecosystem—automate onboarding, planning and retention.",
    },
    {
      img: "/logos/sport.png",
      title: "Sports & Development Centres",
      desc: "Deliver structured training, monitoring and real-time insights for athlete development.",
    },
    {
      img: "/logos/supplements.jpg",
      title: "Supplement Companies",
      desc: "Drive supplement personalisation, adherence and evidence-based insights.",
    },
    {
      img: "/logos/insurance.jpg",
      title: "Insurance Companies",
      desc: "Track lifestyle, reduce claims and engage policyholders with preventive coaching.",
    },
    {
      img: "/logos/pharma.jpg",
      title: "Pharma Companies",
      desc: "Enhance real-world evidence, adherence and patient engagement for medications.",
    },
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const cardWidth = container.firstChild.offsetWidth;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="rounded-3xl bg-[#0A0810] text-center backdrop-blur border border-white/10 shadow-soft p-6 mt-8 text-white">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">Clients & Use Cases</h2>
        <p className="text-white/75 mb-6 max-w-4xl">
          We empower businesses across the preventive health and wellness
          ecosystem. Each category below leverages our Agentic Suite to automate
          workflows, personalise engagement and unlock new value streams.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-6xl mx-auto mt-10">
        <div
          ref={sliderRef}
          className="useCase flex gap-4 overflow-x-auto p scroll-smooth no-scrollbar"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 md:w-1/3 py-4 bg-[#1F1929] rounded-2xl border border-white/10 shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-contain rounded-2xl bg-black/10 rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold mb-1 text-white text-lg">
                  {card.title}
                </h3>
                <p className="text-sm text-white/70">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white text-xl rounded-full w-8 h-8 flex items-center justify-center transition"
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white text-xl rounded-full w-8 h-8 flex items-center justify-center transition"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default ClientAndUseCase;
