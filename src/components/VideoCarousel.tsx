import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    title: 'Air Freight Services',
    description: 'Efficient global delivery via air cargo.',
    video: '/videos/air-freight.mp4',
  },
  {
    title: 'Sea Freight Services',
    description: 'Reliable ocean shipping for bulk goods.',
    video: null,
  },
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPreviousSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="video-carousel"
      aria-label="Freight services"
      className="relative mt-12 w-full overflow-hidden bg-gray-950 sm:mt-16"
    >
      <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[450px] lg:min-h-[550px]">
        {activeSlide.video ? (
          <video
            key={activeSlide.video}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label={activeSlide.title}
          >
            <source src={activeSlide.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-gray-950"
          />
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-12 py-16 text-center text-white sm:px-20">
          <h2 className="text-2xl font-bold text-amber-400 sm:text-3xl lg:text-4xl">
            {activeSlide.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg">
            {activeSlide.description}
          </p>
        </div>

        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Previous freight service"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:left-6"
        >
          <FaArrowLeft aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Next freight service"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:right-6"
        >
          <FaArrowRight aria-hidden="true" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`h-3 w-3 rounded-full ring-2 ring-white ${
                index === activeIndex ? 'bg-amber-400' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
