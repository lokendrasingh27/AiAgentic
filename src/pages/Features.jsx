import React, { useRef } from "react";

const features = [
  { img: "/images/one.jpg" },
  { img: "/images/two.jpg" },
  { img: "/images/three.jpg" },
  { img: "/images/four.jpg" },
  { img: "/images/five.jpg" },
  { img: "/images/six.jpg" },
  { img: "/images/seven.jpg" },
  { img: "/images/eight.jpg" },
  { img: "/images/nine.jpg" },
  { img: "/images/ten.jpg" },
  { img: "/images/eleven.jpg" },
  { img: "/images/twelve.jpg" },
  { img: "/images/thirteen.jpg" },
  { img: "/images/fourteen.jpg" },
  { img: "/images/fivteen.jpg" },
];

export default function Features() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 text-center">
        Features
      </h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white px-3 py-1 rounded-full z-10"
        >
          &#10094;
        </button>

        {/* Scrollable Image Container */}
        <div
          ref={scrollRef}
          className="useCase flex overflow-x-auto scrollbar-hide gap-6 py-4 scroll-smooth"
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
            >
              <img
                src={item.img}
                alt={`Feature ${index + 1}`}
                className="h-64 w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white px-3 py-1 rounded-full z-10"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
