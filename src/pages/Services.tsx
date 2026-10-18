import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import shipImage from '../assets/ship.jpg';
import planeImage from '../assets/plane.jpg';
import warehouseImage from '../assets/warehouse.jpg';
import SecondCarousel from '../components/SecondCarousel';
import OurServices from '../components/OurServices';

const slides = [
  {
    title: 'Global Cargo Forwarding',
    description: 'Moving your goods safely across seas and continents.',
    image: shipImage,
    imageAlt: 'Cargo ship',
  },
  {
    title: 'Air Freight Services',
    description: 'Swift air cargo delivery worldwide.',
    image: planeImage,
    imageAlt: 'Cargo plane',
  },
  {
    title: 'Warehousing & Haulage',
    description: 'Secure storage and inland delivery services.',
    image: warehouseImage,
    imageAlt: 'Warehousing',
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPreviousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  const showNextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <main className="bg-gray-950 text-white">
      <section
        aria-label="Our logistics services"
        className="relative h-[70vh] min-h-[320px] max-h-[750px] overflow-hidden"
      >
        <img
          src={activeSlide.image}
          alt={activeSlide.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-12 text-center sm:px-20">
          <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl lg:text-5xl">
            {activeSlide.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base sm:text-lg lg:text-xl">
            {activeSlide.description}
          </p>
        </div>

        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Previous service"
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:left-6"
        >
          <FaArrowLeft aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Next service"
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:right-6"
        >
          <FaArrowRight aria-hidden="true" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-3">
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
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-amber-400 sm:text-4xl">
          Our Services
        </h2>

        <p className="mx-auto mt-6 max-w-5xl text-center text-base leading-relaxed text-gray-200 sm:text-lg">
          Anokif Express Services Limited is a{' '}
          <strong>Customs Licensed Agency</strong> specializing in{' '}
          <strong>clearing and forwarding of cargo</strong> to any destination
          worldwide. Our commitment is to simplify logistics, ensuring your
          imported goods are cleared efficiently while forwarding your exports
          safely, whether raw materials or finished products.
        </p>

        <p className="mt-6 text-center text-gray-200">
          Our services include:
        </p>
      </section>

      <OurServices />

      <SecondCarousel />
    </main>
  );
};

export default Services;
