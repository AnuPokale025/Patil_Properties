import React from "react";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  // Encoded address for Google Maps Embed API
  const mapAddress = "Aragon+Ave,+Coral+Gables,+FL+33134";
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${mapAddress}`;
  
  // NOTE: For a quick, free version without an API key, use the search URL:
  const freeMapSrc = "https://maps.google.com/maps?q=Aragon%20Ave,%20Coral%20Gables,%20FL%2033134&t=&z=15&ie=UTF8&iwloc=&output=embed";

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
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                title="Property Location"
                src={freeMapSrc}
                className="w-full h-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-50">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8b6239] text-white">
                <MapPin size={20} />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#7a5c3e] mb-2">
              Visit Us
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Aragon Ave, <br />
              Coral Gables, FL 33134
            </p>
            
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Aragon+Ave+Coral+Gables+FL+33134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm font-bold text-[#8b6239] hover:underline"
            >
              GET DIRECTIONS
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}