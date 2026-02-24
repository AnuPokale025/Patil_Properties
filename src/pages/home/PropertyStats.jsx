import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "3,560", label: "Square Feet" },
  { value: "2", label: "Bedrooms" },
  { value: "2", label: "Bathrooms" },
  { value: "2021", label: "Year Built" },
  { value: "2", label: "Car Parking" },
];

const PropertyStats = () => {
  return (
    <section className="relative bg-[#f7f5f2] py-28 px-6">

      {/* Background Blueprint Effect */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/architecture.png')] bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md py-12 px-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-5xl font-serif text-[#8b5e34] mb-4">
                {item.value}
              </h2>
              <p className="text-gray-600 text-lg">
                {item.label}
              </p>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default PropertyStats;
