export default function Home() {
  return (
    <section
      className="w-11/12 md:w-5/6 mx-auto bg-[#f2ead9] rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-10"
      id="home"
    >
      <img
        src="./Dr Sarah.jpeg"
        alt="Doctor"
        className="w-full md:w-1/2 rounded-xl object-cover h-56 sm:h-64 md:h-72"
      />

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug">
          Dr. Sarah Jenkins,
          <br />
          Always here to help!
        </h1>
        <p className="text-sm text-gray-700 leading-relaxed">
          Rheumatological conditions often require a long-term partnership. We
          combine evidence-based medicine with clear, ongoing communication to
          help you manage your symptoms, protect your joint health, and maintain
          your quality of life.
        </p>
      </div>
    </section>
  );
}
