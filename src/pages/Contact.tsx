import {
  FaWhatsapp,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa6';
import ContactMap from '../components/ContactMap';
import warehouseImage from '../assets/warehouse.jpg';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <main>
      <section className="relative h-[50vh] min-h-[320px] max-h-[600px] overflow-hidden bg-gray-950 sm:h-[60vh]">
        <img
          src={warehouseImage}
          alt="Warehouse supporting Anokif Express cargo operations"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/50"
        />

        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-amber-400 sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:py-16">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Connect With Us
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-5">
          <a
            href="https://wa.me/2348035772161"
            aria-label="Contact us on WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} aria-hidden="true" />
          </a>

          <a
            href="https://twitter.com/Paul_anya"
            aria-label="Follow us on X"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} aria-hidden="true" />
          </a>

          <a
            href="https://instagram.com/paul_anyaoko"
            aria-label="Follow us on Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
            style={{
              backgroundImage:
                'linear-gradient(to right, #feda75, #d62976, #962fbf)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} aria-hidden="true" />
          </a>

          <a
            href="https://facebook.com/Paul%20Anya%20Oko"
            aria-label="Visit us on Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={24} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12">
          <ContactMap />
        </div>

        <div className="mt-12 text-left">
          <ContactSection />
        </div>
      </section>
    </main>
  );
};

export default Contact;
