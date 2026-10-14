const services = [
  {
    title: "Freight Forwarding",
    description:
      "Efficient freight forwarding services ensuring your cargo reaches its destination safely, swiftly, and cost-effectively, with tailored solutions for all industries.",
  },
  {
    title: "Customs Clearance",
    description:
      "As a licensed customs agency, we handle all your customs documentation and compliance processes seamlessly, ensuring timely clearance of imported and exported goods.",
  },
  {
    title: "Import and Export",
    description:
      "We facilitate the smooth import and export of raw materials and finished goods, connecting your business to markets worldwide while ensuring compliance with all regulations.",
  },
  {
    title: "Air and Ocean Freight Worldwide",
    description:
      "Reliable air and ocean freight services across the globe, offering flexible options for both time-sensitive shipments and cost-effective bulk cargo transport.",
  },
  {
    title: "Haulage",
    description:
      "We provide safe and efficient haulage services for your cargo within Nigeria and across borders, ensuring secure delivery to your preferred destination.",
  },
  {
    title: "Full Container Loads (FCL) and Less Than Container Loads (LCL)",
    description:
      "Flexible solutions for FCL and LCL shipments, optimizing your logistics needs whether you have a full shipment or smaller loads requiring shared container space.",
  },
];

const OurServices = () => (
  <section className="mx-auto my-8 max-w-7xl px-4 sm:my-12">
    <h2 className="mb-6 text-center text-2xl font-bold text-amber-400 sm:text-3xl">
      Our Services
    </h2>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <article
          key={service.title}
          className="h-full rounded-lg border border-amber-400 bg-gray-900 text-gray-100 shadow-sm transition-shadow hover:shadow-lg"
        >
          <div className="flex h-full flex-col p-6">
            <h3 className="mb-3 text-lg font-semibold text-amber-400">
              {service.title}
            </h3>

            <p className="leading-relaxed">{service.description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default OurServices;
