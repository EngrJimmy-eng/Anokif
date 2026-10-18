import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import VideoCarousel from '../components/VideoCarousel';
import WhatWeDo from '../components/WhatWeDo';
import Hero from '../components/Hero';

const slides = [
  {
    image: '/planeoffloading2.jpeg',
    alt: 'Anokif Express plane offloading cargo',
    title: 'Clearing & Forwarding',
    description: 'Efficient cargo handling and forwarding worldwide.',
  },
  {
    image: '/warehouse.jpg',
    alt: 'Anokif Express warehousing',
    title: 'Warehousing',
    description: 'Safe, secure, and accessible storage solutions.',
  },
  {
    image: '/lorry.jpg',
    alt: 'Anokif Express haulage truck',
    title: 'Haulage Services',
    description: 'Delivering your goods efficiently across Nigeria and beyond.',
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPreviousSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <main className="pt-4">
      <Hero />

      <section
        id="home-carousel"
        aria-label="Anokif Express services"
        className="relative mx-auto mt-6 h-[55vh] min-h-[350px] max-h-[650px] w-full overflow-hidden bg-gray-950 sm:h-[65vh]"
      >
        <img
          key={activeSlide.image}
          src={activeSlide.image}
          alt={activeSlide.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50"
        />

        <div className="absolute inset-x-0 bottom-0 px-12 pb-12 pt-8 text-center text-white sm:px-20 sm:pb-16">
          <h2 className="text-2xl font-bold text-amber-400 sm:text-3xl lg:text-4xl">
            {activeSlide.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg">
            {activeSlide.description}
          </p>
        </div>

        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:left-6"
        >
          <FaArrowLeft aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white sm:right-6"
        >
          <FaArrowRight aria-hidden="true" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`h-3 w-3 rounded-full ring-2 ring-white ${
                index === activeIndex ? 'bg-amber-400' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-4 text-center sm:mt-16">
        <h2 className="text-2xl font-bold text-amber-400 sm:text-3xl">
          Welcome to Anokif Express Limited
        </h2>
        <p className="mt-4 text-lg leading-relaxed">
          A Customs Licensed Agency specializing in{' '}
          <strong>clearing and forwarding of cargo</strong>, haulage,
          warehousing, import and export, and general merchandise services
          across Nigeria and globally.
        </p>
      </section>

      <section className="my-12 bg-gray-900 py-10 text-gray-100 sm:my-16 sm:py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
            Our Services
          </h2>

          <p className="mx-auto max-w-4xl text-center text-lg leading-relaxed">
            Anokif Express Limited is a <strong>Customs Licensed Agency</strong>{' '}
            specializing in <strong>clearing and forwarding of cargo</strong>,
            haulage, warehousing, import and export, and general merchandise.
            We emphasize efficient, reliable cargo handling and forwarding for
            raw materials and finished goods globally.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="h-full rounded-lg bg-white p-6 text-gray-900 shadow transition-shadow hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Clearing & Forwarding
              </h3>
              <p className="leading-relaxed">
                Efficient customs clearing and forwarding of your cargo anywhere
                in the world.
              </p>
            </article>

            <article className="h-full rounded-lg bg-white p-6 text-gray-900 shadow transition-shadow hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Haulage & Logistics
              </h3>
              <p className="leading-relaxed">
                Reliable haulage and logistics solutions across Nigeria and beyond.
              </p>
            </article>

            <article className="h-full rounded-lg bg-white p-6 text-gray-900 shadow transition-shadow hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-blue-900">
                Warehousing
              </h3>
              <p className="leading-relaxed">
                Safe, secure warehousing services for raw materials and finished goods.
              </p>
            </article>
          </div>
        </div>
      </section>

      <VideoCarousel />
      <WhatWeDo />
    </main>
  );
};

export default Home;
