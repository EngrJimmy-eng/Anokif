import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function ContactSection() {
  return (
    <div className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      
        {/* Head Office */}
        <div className="mb-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h4 className="text-primary">Head Office</h4>
            <p>
              110 St Michael's Road,  
              Aba, Abia State, Nigeria
            </p>
            <p><strong>Phone:</strong> +234 807 119 7311</p>
            <p><strong>Email:</strong> anokifintl@yahoo.com</p>
          </div>
        </div>

        {/* Branch Office */}
        <div className="mb-4">
          <div className="p-4 shadow-sm rounded bg-light">
            <h4 className="text-primary">Branch Office/Warehouse</h4>
            <p>
              No. 147 Hospital Road,  
               Aba, Abia State, Nigeria
            </p>
            <p><strong>Phone:</strong> +234 803 577 2161</p>
            
          </div>
        </div>
      
    </div>
  );
}

export default ContactSection;
