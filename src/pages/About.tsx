import warehouseImage from '../assets/warehouse.jpg';

function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl">
          About Anokif Express
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-700">
          Anokif Express is a fast, reliable, and customer-focused clearing and
          forwarding company. We pride ourselves on delivering excellence,
          ensuring your parcels reach their destinations safely and on time.
        </p>

        <p className="mt-4 leading-relaxed text-gray-700">
          Our vision is to revolutionize express delivery across Nigeria and
          beyond, combining speed, technology, and customer satisfaction.
        </p>
      </header>

      <section
        aria-label="Our delivery services"
        className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl bg-gray-950 shadow-lg"
      >
        <img
          src={warehouseImage}
          alt="Warehouse supporting Anokif Express cargo operations"
          className="h-72 w-full object-cover sm:h-96 lg:h-[450px]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
          <h2 className="text-2xl font-bold text-amber-400 sm:text-3xl">
            Fast Delivery
          </h2>
          <p className="mt-2 text-base sm:text-lg">
            Speed and reliability across all regions.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl rounded-xl bg-gray-50 p-6 sm:mt-16 sm:p-10">
        <h2 className="text-2xl font-bold text-blue-900 sm:text-3xl">
          Why Choose Us?
        </h2>

        <p className="mt-5 leading-relaxed text-gray-700">
          At Anokif Express, we combine technology and efficiency to provide
          top-tier courier services. With our dedicated team and modern
          logistics solutions, we make sure that every package reaches its
          destination safely and quickly.
        </p>

        <p className="mt-4 leading-relaxed text-gray-700">
          We aim to redefine the logistics experience by focusing on customer
          satisfaction, transparent pricing, and innovative delivery solutions
          tailored to your needs.
        </p>
      </section>
    </main>
  );
}

export default About;
