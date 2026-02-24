import React from "react";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#7a5c3e]">
            Boasting A Superb Location
          </h2>
          <p className="text-gray-500 mt-4">
            A Dream Location Packed With Potential
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Map */}
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="Property Location"
                src="https://www.google.com/maps?q=Coral+Gables,+FL+33134&output=embed"
                className="w-full h-[400px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8b6239] text-white">
                <MapPin size={20} />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#7a5c3e] mb-2">
              Visit Us
            </h3>

            <p className="text-gray-600">
              Aragon Ave, Coral Gables, FL 33134
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
