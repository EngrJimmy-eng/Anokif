import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
import Services from './components/Services';
import WhatWeDo from './components/WhatWeDo';

const App = () => {
  return (
    <>
    <Navbar/>
    
     
    <div>
      <header className="text-white text-center bg-dark py-3">
        <h1>Anokif Express Services Limited</h1>
        <p>Licensed Customs Agency – Logistics, Haulage, Warehousing, Import & Export</p>
      </header>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active position-relative">
            <img
              src="/plane.png" // Place the plane image in public folder
              className="d-block w-100"
              alt="Plane offloading goods"
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h2 className="text-light">Fast & Reliable Logistics Services</h2>
              <p>We specialize in international freight, customs clearance, warehousing and general merchandise.</p>
            </div>
          </div>
        </div>
      </div>

      <VideoCarousel />

      

      <Services/>

      <WhatWeDo/>

      <footer className="bg-dark text-white text-center py-3 rounded-top">
        <p>&copy; {new Date().getFullYear()} Anokif Express Services Limited</p>
      </footer>
    </div>
    
    </>
  );
};

export default App;


