import React from 'react';
import './VideoCarousel.css';

const VideoCarousel = () => {
  return (
    <div id="videoCarousel" className="carousel slide " data-bs-ride="carousel ">
      <div className="carousel-inner ">
        <div className="carousel-item active ">
          <video className="d-block w-100 " autoPlay loop muted>
            <source src="/videos/air-freight.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="carousel-caption d-none d-md-block ">
            <h5>Air Freight Services</h5>
            <p>Efficient global delivery via air cargo.</p>
          </div>
        </div>

        <div className="carousel-item">
          <video className="d-block w-100" autoPlay loop muted>
            <source src="/videos/sea-freight.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="carousel-caption d-none d-md-block">
            <h5>Sea Freight Services</h5>
            <p>Reliable ocean shipping for bulk goods.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default VideoCarousel;
