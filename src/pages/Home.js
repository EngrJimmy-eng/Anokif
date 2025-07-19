import React from 'react';
import VideoCarousel from '../components/VideoCarousel';
import WhatWeDo from '../components/WhatWeDo';
import Hero from '../components/Hero';



const Home = () => {
  return (
    
    <div className="container mt-4">
      
      
      <Hero/>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/logo192.png" className="d-block w-100 " alt="Anokif Express Plane Offloading Cargo" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
              <h5>Clearing & Forwarding</h5>
              <p>Efficient cargo handling and forwarding worldwide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/carousel2.jpg" className="d-block w-100" alt="Anokif Express Warehousing " />
            
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
              <h5>Warehousing</h5>
              <p>Safe, secure, and accessible storage solutions.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/carousel3.jpg" className="d-block w-100" alt="Anokif Express Haulage" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-2 rounded">
              <h5>Haulage Services</h5>
              <p>Delivering your goods efficiently across Nigeria and beyond.</p>
            </div>
          </div>
        </div>
        
        
      </div>

      {/* Welcome Text */}
      <div className="text-center mt-5">
        <h1 className="text-warning">Welcome to Anokif Express Limited</h1>
        <p className="lead mt-3">
          A Customs Licensed Agency specializing in <strong>clearing and forwarding of cargo</strong>, haulage,
          warehousing, import and export, and general merchandise services across Nigeria and globally.
        </p>
      </div>

            

      <div className="container-fluid big-primary bg-dark text-light py-5 mt-5 mb-5 w-100">
  <h2 className="text-center text-warning mb-4">Our Services</h2>
  <p className="lead text-center">
    Anokif Express Limited is a <strong>Customs Licensed Agency</strong> specializing in
    <strong> clearing and forwarding of cargo</strong>, haulage, warehousing, import and export, 
    and general merchandise. We emphasize efficient, reliable cargo handling and forwarding
    for raw materials and finished goods globally.
  </p>

  <div className="row mt-4">
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h5 className="card-title">Clearing & Forwarding</h5>
          <p className="card-text">Efficient customs clearing and forwarding of your cargo anywhere in the world.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h5 className="card-title">Haulage & Logistics</h5>
          <p className="card-text">Reliable haulage and logistics solutions across Nigeria and beyond.</p>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow">
        <div className="card-body">
          <h5 className="card-title">Warehousing</h5>
          <p className="card-text">Safe, secure warehousing services for raw materials and finished goods.</p>
        </div>
      </div>
    </div>
  </div>

   {/* Carousel Video */}
      <div className="carousel-container">
        
      </div>
</div>
      

<VideoCarousel/>

<WhatWeDo/>




    </div>
  );
};

export default Home;

