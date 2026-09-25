export default function About() {
  return (
    <section
      className="w-11/12 sm:w-5/6 p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8"
      id="about"
    >
      <p className="w-full md:w-1/2 text-sm sm:text-base text-center text-gray-800 leading-relaxed">
        In her high quality private cabinet, Dr. Sarah Jenkins provides
        compassionate, evidence-based rheumatological care designed to help you
        manage chronic conditions and preserve your joint health. Focusing on a
        long-term partnership built on clear communication, we work closely with
        you to tailor advanced treatments to your individual lifestyle and
        health goals.
      </p>

      <div className="w-full md:w-1/2 flex flex-col items-center text-center gap-2">
        <img
          src="./logo.png"
          alt=""
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-25 lg:h-25"
        />
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 tracking-wide">
          DR. SARAH JENKINS
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-teal-700 tracking-widest">
          RHEUMATOLOGY
        </p>
        <p className="text-xs sm:text-sm italic text-gray-600">
          Private cabinet
        </p>
      </div>
    </section>
  );
}
