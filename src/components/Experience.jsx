const Experience = () => {
  return (
    <section className="bg-[#d7d7d7] py-24">

      {/* Title */}
      <div className="mb-16 flex justify-center">
        <span className="inline-block border-[5px] border-black px-10 py-3 text-xl font-bold tracking-widest">
          EXPERIENCE
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-10 space-y-16">

        {/* Internship 1 */}
        <div>
          <h3 className="text-xl font-semibold tracking-widest">
            Full Stack Developer
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-700">
            Nandighosh Roadx Motors Pvt Ltd · Odisha (Remote)
          </p>
          <p className="text-sm text-gray-500">
            July 2025 – Present
          </p>

          <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-2">
            <li>
              Developing an end-to-end e-bidding platform for construction tenders named <strong>Propload</strong>.
            </li>
            <li>
              Working on frontend using React and backend using Node.js & Express.
            </li>
            <li>
              Designing scalable APIs and handling database integration.
            </li>
          </ul>
        </div>

        {/* Internship 2 */}
        <div>
          <h3 className="text-xl font-semibold tracking-widest">
            Frontend & Backend Developer
          </h3>
          <p className="mt-1 text-sm font-medium text-gray-700">
            Peymagen Informatics & Automation · Nagpur (On-site)
          </p>
          <p className="text-sm text-gray-500">
            May 2025 – July 2025
          </p>

          <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-2">
            <li>
              Contributed to the development of frontend and backend features for an appointed application.
            </li>
            <li>
              Collaborated with the development team to implement business logic and UI components.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Experience;
