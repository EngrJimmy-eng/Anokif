import React from 'react';
import shipImage from '../assets/ship.jpg'; // replace with your generated ship image
import planeImage from '../assets/plane.jpg'; // replace with your generated plane image
import warehouseImage from '../assets/warehouse.jpg'; // optional, for variety
import SecondCarousel from '../components/SecondCarousel';
import OurServices from '../components/OurServices';



const Services = () => {
  return (
    <div className="text-light bg-dark">
      {/* Carousel */}
      <div id="servicesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: "70vh", overflow: "hidden" }}>
          <div className="carousel-item active position-relative h-100">
            <img src={shipImage} className="d-block w-100 h-100" alt="Cargo Ship" style={{ objectFit: "cover" }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="text-warning">Global Cargo Forwarding</h2>
              <p>Moving your goods safely across seas and continents.</p>
            </div>
          </div>
          <div className="carousel-item position-relative h-100">
            <img src={planeImage} className="d-block w-100 h-100" alt="Cargo Plane" style={{ objectFit: "cover" }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="text-warning">Air Freight Services</h2>
              <p>Swift air cargo delivery worldwide.</p>
            </div>
          </div>
          <div className="carousel-item position-relative h-100">
            <img src={warehouseImage} className="d-block w-100 h-100" alt="Warehousing" style={{ objectFit: "cover" }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="text-warning">Warehousing & Haulage</h2>
              <p>Secure storage and inland delivery services.</p>
            </div>
          </div>
        </div>

        
        
      </div>

      {/* Services Description */}
      <div className="container py-5">
        <h1 className="text-center text-warning mb-4">Our Services</h1>
        <p className="lead text-center">
          Anokif Express Services Limited is a <strong>Customs Licensed Agency</strong> specializing in <strong>clearing and forwarding of cargo</strong> to any destination worldwide. Our commitment is to simplify logistics, ensuring your imported goods are cleared efficiently while forwarding your exports safely, whether raw materials or finished products.
        </p>
        <p className="text-center">
          Our services include:
        </p>
        
        
      </div>
      <OurServices />

      <SecondCarousel />
    </div>
  );
};

export default Services;

