import React from "react";
import { Home, CheckSquare, Globe, Diamond } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Home size={40} />,
      title: "Latest Property",
      desc: "Tasteful and seem-less renovation, this home is a unique refreshing.",
    },
    {
      icon: <CheckSquare size={40} />,
      title: "Awesome Area",
      desc: "This suite offers outstanding views of the city, ocean and mountains.",
    },
    {
      icon: <Globe size={40} />,
      title: "Great Surroundings",
      desc: "Coral Gables provides a coastal lifestyle in a tropical setting.",
    },
    {
      icon: <Diamond size={40} />,
      title: "Supreme Location",
      desc: "It is ideally situated on a very private lot along a whisper quiet street.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
        
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">
            Great Features
          </p>

          <h2 className="text-4xl font-serif text-[#8a6239] leading-tight mb-6">
            Classic Interiors <br /> & Exteriors
          </h2>

          <p className="text-gray-500 mb-8">
            Generously sized, this home delivers the very best Interiors & exteriors.
          </p>

          <button className="bg-[#8a6239] text-white px-6 py-3 rounded-md hover:bg-[#6f4d2b] transition">
            Schedule a Tour
          </button>
        </div>

        {/* Features Grid */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4">
              
              <div className="text-[#8a6239]">
                {item.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#8a6239] mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}