export default function Services() {
  const services = [
    { title: "Musculoskeletal Ultrasound (MSK US)", image: "./msk us.jpeg" },
    { title: "Radiography (X-ray)", image: "./x ray.jpeg" },
    { title: "MRI (Magnetic Resonance Imaging)", image: "./mri.jpeg" },
  ];

  return (
    <section
      className="w-11/12 sm:w-5/6 mx-auto bg-[#f2ead9] rounded-2xl p-4 sm:p-6 md:p-8"
      id="services"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
        Our services
      </h2>

      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          <span className="font-semibold">
            Comprehensive Clinical Diagnostics:
          </span>{" "}
          As a senior professional, Dr. Jenkins has very strong capability to
          pinpoint joint and soft-tissue inflammation instantly using
          high-resolution musculoskeletal ultrasound.
        </p>
        <p>
          <span className="font-semibold">Streamlined Imaging Pathways:</span>{" "}
          In her cabinet, Dr. Jenkins offers an access to highly advanced
          digital radiography and MRI coordination to get accurate answers
          without unnecessary delays.
        </p>
        <p>
          <span className="font-semibold">
            Personalized Long-Term Care Plans:
          </span>{" "}
          Dr. Sarah Jenkins focuses on ongoing chronic condition management,
          targeted injections, and collaborative therapy designed to preserve
          your mobility and quality of life.
        </p>
        <p>
          The following images show the medical imaging technologies that her
          cabinet offers access to:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
        {services.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            <img
              src={s.image}
              alt={s.title}
              className="rounded-lg w-full h-48 object-cover"
            />
            <p className="text-sm text-gray-800">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
