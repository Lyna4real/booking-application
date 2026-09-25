export default function Contact() {
  return (
    <section
      className="w-11/12 sm:w-5/6 bg-[#f2ead9] rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center"
      id="contact"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
        Contact us
      </h2>

      <div className="max-w-md mx-auto flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-gray-800">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-semibold w-16 sm:w-20">Address</span>
          <span>123 Main Street, Clifornia, USA</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-semibold w-16 sm:w-20">Phone</span>
          <span>+1 555 123 456</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-semibold w-16 sm:w-20">Email</span>
          <span>contact@drsarahjenkins.com</span>
        </div>
      </div>
      <LocationMap></LocationMap>
    </section>
  );
}

function LocationMap() {
  return (
    <section className="w-full p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
        Find us
      </h2>
      <iframe
        title="Clinic location"
        src="https://www.google.com/maps?q=YOUR_ADDRESS&output=embed"
        className="w-full h-56 sm:h-64 md:h-80 rounded-xl border-0"
        loading="lazy"
      />
    </section>
  );
}
