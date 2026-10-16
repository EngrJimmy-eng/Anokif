import { FaBox, FaGlobe, FaShareSquare } from 'react-icons/fa';

const WhatWeDo = () => {
  return (
    <section
      id="what-we-do"
      className="mb-12 mt-4 rounded-xl bg-gray-900 py-10 text-gray-100 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
          WHAT WE DO
        </h2>

        <p className="mx-auto mb-10 max-w-4xl text-center text-lg leading-relaxed">
          Anokif Express Services Limited is a{' '}
          <strong>Customs Licensed Agency</strong> that lays very strong emphasis
          on <strong>clearing and forwarding</strong>. We specialize in ensuring
          seamless logistics from port to destination.
        </p>

        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <article>
            <FaBox
              aria-hidden="true"
              className="mx-auto text-4xl text-amber-400 sm:text-5xl"
            />
            <h3 className="mb-3 mt-4 text-lg font-semibold">
              Clearing Imported Goods
            </h3>
            <p className="leading-relaxed">
              We ensure quick customs clearance for imported goods — whether raw
              materials or finished products.
            </p>
          </article>

          <article>
            <FaShareSquare
              aria-hidden="true"
              className="mx-auto text-4xl text-amber-400 sm:text-5xl"
            />
            <h3 className="mb-3 mt-4 text-lg font-semibold">
              Forwarding Exports
            </h3>
            <p className="leading-relaxed">
              We export goods to destinations around the globe, whether raw
              materials or finished products.
            </p>
          </article>

          <article>
            <FaGlobe
              aria-hidden="true"
              className="mx-auto text-4xl text-amber-400 sm:text-5xl"
            />
            <h3 className="mb-3 mt-4 text-lg font-semibold">Global Reach</h3>
            <p className="leading-relaxed">
              Our logistics services span across continents, supporting
              industries with reliable delivery.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
