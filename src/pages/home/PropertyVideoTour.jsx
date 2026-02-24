import React from "react";
import { Check } from "lucide-react";
import video from "../../assets/v1.mp4";
import { useNavigate } from "react-router-dom";

export default function PropertyVideoTour() {
  const navigate = useNavigate();
  const Tour = () => {
    navigate("/tour");
  }
  return (
    <section className="bg-[#f4f1ec] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#7a5c3e]">
            Property Video Tour
          </h2>
          <p className="text-gray-500 mt-4">
            Modern City Apartment Offering Comfort & Style
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side - Video */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src={video}
              title="Property Tour Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
              Why Choose Our Property
            </p>

            <h3 className="text-3xl md:text-4xl font-serif text-[#7a5c3e] leading-snug mb-6">
              Amazingly Modern And Beautiful In Designs Spaces & Homes
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Spacious and fabulous home in prime location. This executive
              style 3 bed, 2 bath home has impact resistant windows and
              renovated kitchen.
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Large Tile Floors",
                "Walk-in Closets",
                "Specialist services",
                "Fully Furnished Apartments",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <Check className="text-[#8b6239]" size={18} />
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={Tour} className="bg-[#8b6239] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#744f2e] transition duration-300">
              Schedule a Tour
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
