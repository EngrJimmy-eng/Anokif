import React from 'react';

const services = [
  {
    title: "Freight Forwarding",
    description: "Efficient freight forwarding services ensuring your cargo reaches its destination safely, swiftly, and cost-effectively, with tailored solutions for all industries."
  },
  {
    title: "Customs Clearance",
    description: "As a licensed customs agency, we handle all your customs documentation and compliance processes seamlessly, ensuring timely clearance of imported and exported goods."
  },
  {
    title: "Import and Export",
    description: "We facilitate the smooth import and export of raw materials and finished goods, connecting your business to markets worldwide while ensuring compliance with all regulations."
  },
  {
    title: "Air and Ocean Freight Worldwide",
    description: "Reliable air and ocean freight services across the globe, offering flexible options for both time-sensitive shipments and cost-effective bulk cargo transport."
  },
  {
    title: "Haulage",
    description: "We provide safe and efficient haulage services for your cargo within Nigeria and across borders, ensuring secure delivery to your preferred destination."
  },
  {
    title: "Full Container Loads (FCL) and Less Than Container Loads (LCL)",
    description: "Flexible solutions for FCL and LCL shipments, optimizing your logistics needs whether you have a full shipment or smaller loads requiring shared container space."
  },
];

const OurServices = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center text-warning mb-4"></h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card bg-dark text-light h-100 border border-warning">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-warning">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
