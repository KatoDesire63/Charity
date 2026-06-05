const programs = [
  {
    img: "/img/sponsorship.jpeg",
    label: "Child Sponsorship",
    color: "bg-red-500",
    info: "Support a child’s education, healthcare, and daily needs."
  },
  {
    img: "/img/school.jpeg",
    label: "Education Support",
    color: "bg-green-900",
    info: "Providing school materials and tuition for children."
  },
  {
    img: "/img/medical.jpeg",
    label: "Medical Care",
    color: "bg-green-600",
    info: "Ensuring access to healthcare services."
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/donate3.jpg')"
      }}
    >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h3 className="text-3xl font-bold mb-10 text-center">
            Our Programs
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((p) => (
              <div key={p.label} className="perspective group">
                
                <div className="flip-card-inner">

                  {/* FRONT */}
                  <div className="flip-card-front bg-white text-black overflow-hidden shadow">
                    <img
                      src={p.img}
                      className="h-[70%] w-full object-cover"
                      alt={p.label}
                    />
                    <div className={`h-[30%] flex items-center justify-center ${p.color} text-white font-bold`}>
                      {p.label}
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-card-back bg-gray-900 text-white shadow flex items-center justify-center p-6 text-center">
                    <p>{p.info}</p>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
    </section>
  );
}