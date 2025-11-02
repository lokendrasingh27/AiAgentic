import React from "react";

const ClientAndUseCase = () => {
  const cards = [
    {
      img: "/logos/doctor.png",
      title: "Doctors & Clinics",
      desc: "Automate intake, adherence and follow-ups—freeing doctors from repetitive tasks.",
    },
    {
      img: "/logos/gyneo.png",
      title: "Gynecology & Women’s Health",
      desc: "Personalised cycle tracking, PCOS insights and women’s health coaching.",
    },
    {
      img: "/logos/fertility.png",
      title: "Fertility Clinics",
      desc: "Streamline lifestyle tracking from preconception to IVF and beyond.",
    },
    {
      img: "/logos/fitness.png",
      title: "Fitness Influencers",
      desc: "Scale personalised coaching with AI-driven interviews, plans and accountability.",
    },
    {
      img: "/logos/trainer.png",
      title: "Trainers",
      desc: "Automate client intake, personalised program design and progress tracking.",
    },
    {
      img: "/logos/gym.png",
      title: "Gym Owners",
      desc: "Transform your gym into a smart ecosystem—automate onboarding, planning and retention.",
    },
    {
      img: "/logos/sport.png",
      title: "Sports & Development Centres",
      desc: "Deliver structured training, monitoring and real-time insights for athlete development.",
    },
    {
      img: "/logos/supplements.png",
      title: "Supplement Companies",
      desc: "Drive supplement personalisation, adherence and evidence-based insights.",
    },
    {
      img: "/logos/.png",
      title: "Wearables & Device OEMs",
      desc: "Build integrated AI experiences using data from rings, watches and trackers.",
    },
    {
      img: "/logos/inssurance.png",
      title: "Insurance Companies",
      desc: "Track lifestyle, reduce claims and engage policyholders with preventive coaching.",
    },
    {
      img: "/logos/pharma.png",
      title: "Pharma Companies",
      desc: "Enhance real-world evidence, adherence and patient engagement for medications.",
    },
  ];

  return (
    <section className="rounded-3xl lg:bg-[#0A0810] text-center backdrop-blur lg:border border-white/10 shadow-soft lg:p-6 mt-8">
     <div className="flex items-center justify-center flex-col">
         <h2 className="text-3xl font-semibold mb-4 text-white">
        Clients & Use Cases
      </h2>
      <p className="text-white/75 mb-6 max-w-4xl ">
        We empower businesses across the preventive health and wellness
        ecosystem. Each category below leverages our Agentic Suite to automate
        workflows, personalise engagement and unlock new value streams.
      </p>
     </div>

      <div className="flex flex-wrap items-center justify-center   lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden w-80 text-center bg-[#1F1929] border border-white/10 flex flex-col transform transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:border-white/20"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-40 w-full object-fit transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4 flex-1">
              <h3 className="font-semibold mb-1 text-white">{card.title}</h3>
              <p className="text-sm text-white/70">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientAndUseCase;
