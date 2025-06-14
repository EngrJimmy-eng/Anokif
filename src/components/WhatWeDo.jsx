import React from 'react';

const WhatWeDo = () => {
  return (
    <section className="bg-dark text-light py-5 mb-5 mt-4 rounded-top rounded-bottom" id="what-we-do">
      <div className="container">
        <h2 className="text-center mb-4 text-warning">WHAT WE DO</h2>
        <p className="lead text-center mb-5">
          Anokif Express Services Limited is a **Customs Licensed Agency** that lays very strong emphasis on **clearing and forwarding**. We specialize in ensuring seamless logistics from port to destination.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-box-seam display-4 text-warning"></i>
            <h5 className="mt-3">Clearing Imported Goods</h5>
            <p>
              We ensure quick customs clearance for imported goods — whether raw materials or finished products.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-arrow-up-right-square display-4 text-warning"></i>
            <h5 className="mt-3">Forwarding Exports</h5>
            <p>
              We export goods to destinations around the globe, whether raw materials or finished products.
            
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-globe display-4 text-warning"></i>
            <h5 className="mt-3">Global Reach</h5>
            <p>
              Our logistics services span across continents, supporting industries with reliable delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
