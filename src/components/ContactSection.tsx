function ContactSection() {
  return (
    <section className="my-10 sm:my-14">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Head Office */}
          <article className="rounded-lg bg-gray-100 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">
              Head Office
            </h3>

            <p className="mb-3 leading-relaxed">
              110 St Michael's Road,
              Aba, Abia State, Nigeria
            </p>

            <p className="mb-3">
              <strong>Phone:</strong> +234 807 119 7311
            </p>

            <p className="break-words">
              <strong>Email:</strong> anokifintl@yahoo.com
            </p>
          </article>

          {/* Branch Office */}
          <article className="rounded-lg bg-gray-100 p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold text-blue-800">
              Branch Office/Warehouse
            </h3>

            <p className="mb-3 leading-relaxed">
              No. 147 Hospital Road,
              Aba, Abia State, Nigeria
            </p>

            <p>
              <strong>Phone:</strong> +234 803 577 2161
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
