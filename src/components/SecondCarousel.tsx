import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import planeImage from '../assets/plane.jpg';
import warehouseImage from '../assets/warehouse.jpg';

const slides = [
  {
    image: planeImage,
    imageAlt: 'Cargo plane transporting freight',
    title: 'Efficient Cargo Forwarding',
    showContactButton: true,
  },
  {
    image: warehouseImage,
    imageAlt: 'Warehouse for storing cargo',
    title: 'Warehousing & Cargo Storage',
    showContactButton: false,
  },
];

const SecondCarousel = () => {
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
      id="secondCarousel"
      aria-label="Cargo services"
      className="relative h-[70vh] min-h-[400px] max-h-[700px] w-full overflow-hidden bg-gray-950"
    >
      <img
        key={activeSlide.image}
        src={activeSlide.image}
        alt={activeSlide.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/50"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
        <h2 className="text-2xl font-bold text-amber-400 sm:text-3xl lg:text-4xl">
          {activeSlide.title}
        </h2>

        {activeSlide.showContactButton && (
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-amber-400 px-6 py-3 text-base font-bold text-gray-950 transition-colors hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950 sm:text-lg"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={showPreviousSlide}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white sm:left-6"
      >
        <FaArrowLeft aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={showNextSlide}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white sm:right-6"
      >
        <FaArrowRight aria-hidden="true" />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`h-3 w-3 rounded-full ring-2 ring-white transition-colors ${
              index === activeIndex ? 'bg-amber-400' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SecondCarousel;
