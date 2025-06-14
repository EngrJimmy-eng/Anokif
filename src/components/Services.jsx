const Services = () => {
  const items = [
    'Clearing & Forwarding',
    'Warehousing',
    'Import & Export',
    'Haulage',
  ];

  return (
    <section id="services" className="bg-dark py-5 rounded-bottom ">
      <div className="container">
        <h2 className="text-center mb-4 text-light ">Our Services</h2>
        <div className="row">
          {items.map((service, idx) => (
            <div className="col-md-6 col-lg-3 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{service}</h5>
                  <p className="card-text">
                    Reliable {service.toLowerCase()} services tailored to your logistics needs.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
