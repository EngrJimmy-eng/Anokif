import React from 'react';
import { FaWhatsapp, FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import ContactMap from '../components/ContactMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import warehouseImage from '../assets/warehouse.jpg';

import ContactSection from '../components/ContactSection';


<ContactMap />


const Contact = () => {
  return (
    <div>
     {/* Carousel */}
      <div id="servicesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: "70vh", overflow: "hidden" }}>
          <div className="carousel-item active position-relative h-100">
            <img src={warehouseImage} className="d-block w-100 h-100" alt="Cargo Ship" style={{ objectFit: "cover" }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="text-warning">Contact Us</h2>
              
            </div>
          </div>
        </div>
        </div>
    
    <div className="container text-center py-5">
      <h2 className="mb-4">Contact Us</h2>
      <div className="d-flex justify-content-center gap-4">

        {/* WhatsApp */}
        <a
          href="https://wa.me/2348035772161"
          className="btn btn-success rounded-circle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* X (Twitter) */}
        <a
          href="https://twitter.com/Paul_anya"
          className="btn btn-dark rounded-circle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/paul_anyaoko"
          className="btn btn-danger rounded-circle"
          style={{ backgroundImage: "linear-gradient(to right, #feda75, #d62976, #962fbf)", color: "#fff", border: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/Paul Anya Oko"
          className="btn btn-primary rounded-circle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF size={24} />
        </a>

      </div>
      <ContactMap/>
      <ContactSection/>
    </div>
    

</div>
  );
};

export default Contact;



