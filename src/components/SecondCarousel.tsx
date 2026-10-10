import React from 'react';

import planeImage from '../assets/plane.jpg';
import warehouseImage from '../assets/warehouse.jpg';


const SecondCarousel = () => {
  return (
    <div id="secondCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ height: "90vh", overflow: "hidden" }}>
        <div className="carousel-item active position-relative h-100">
          <img src={planeImage} className="d-block w-100 h-100" alt="Ship Cargo" style={{ objectFit: "cover" }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
           <div className="carousel-item">
      <img src={warehouseImage} className="d-block w-100" alt="..." />
    </div>
    
    
    
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h3 className="text-warning">Efficient Cargo Forwarding</h3>

            
            <div className="w-100 d-flex justify-content-start ps-5 mt-5">
    <a
      href="/contact"
      className="btn btn-warning text-dark fw-bold fs-5 px-4 py-2"
    >
      Contact Us
    </a>
  </div>
          </div>
        </div>
        <div className="carousel-item position-relative h-100">
          <img src={planeImage} className="d-block w-100 h-100" alt="Plane Cargo" style={{ objectFit: "cover" }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h3 className="text-warning">Swift Air Cargo</h3>
            
          </div>
        </div>
      </div>

      
      
    
      
    </div>
  );
};

export default SecondCarousel;
