import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Example industry data
const industries = [
  {img:"/images/one.jpg"},
  {img:"/images/two.jpg"},
  {img:"/images/three.jpg"},
  {img:"/images/four.jpg"},
  {img:"/images/five.jpg"},
  {img:"/images/six.jpg"},
  {img:"/images/seven.jpg"},
  {img:"/images/eight.jpg"},
  {img:"/images/nine.jpg"},
  {img:"/images/ten.jpg"},
  {img:"/images/eleven.jpg"},
];

export default function Features() {
  return (
    <div className="relative w-full max-w-6xl mx-auto ">
           <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">Features</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={4}
        slidesPerView={3}
        navigation
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: false, // 👉 change to true to make it go opposite direction
        }}
        direction="horizontal" // 👉 change to "vertical" for up-down movement
        breakpoints={{
          340: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4},
        }}
        className="rounded-xl"
      >
        {industries.map((ind) => (
          <SwiperSlide key={ind.key}>
            <div className="bg-whit transition-transform duration-500 hover:scale-110 rounded-xl py-4 flex flex-col items-center  transition cursor-pointer">
              <img
                src={ind.img}
                alt={ind.name}
                className="h-64 w-64 rounded-xl object-cover mb-2"
              />
              <span className="text-white/90 text-sm">{ind.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* optional custom buttons if you want */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
        }
      `}</style>
    </div>
  );
}
