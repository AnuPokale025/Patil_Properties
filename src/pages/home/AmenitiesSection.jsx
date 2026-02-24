import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const amenitiesLeft = [
  "Clubhouse",
  "Fitness Center",
  "Gated",
  "Courtyard",
  "Central Heating",
  "Air Conditioning",
  "Free WiFi",
  "Theater",
];

const amenitiesRight = [
  "Online Services",
  "Health Club Discount",
  "Elevator",
  "Business Center",
  "Alarm System",
  "Car Parking",
  "Greenbelt",
];

const images = [
  "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/Property-2.jpg",
  "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/spacejoy-c6SxfCFLNhE-unsplash-600x600.jpg",
];

const AmenitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE SLIDER */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg">
          
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Amenities"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Slider Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <motion.span
                key={index}
                animate={{
                  scale: index === currentIndex ? 1.3 : 1,
                }}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "bg-[#8b5e34]"
                    : "bg-gray-300"
                }`}
              ></motion.span>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-serif text-[#8b5e34] mb-6"
          >
            Amenities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg leading-relaxed mb-10"
          >
            In property and land use planning, amenity is something considered
            to benefit a location, contribute to its enjoyment, and thereby
            increase its value.
          </motion.p>

          {/* Amenities List */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-x-16 gap-y-4"
          >
            
            <div className="space-y-4">
              {amenitiesLeft.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  className="flex items-center space-x-3"
                >
                  <Check className="text-[#8b5e34]" size={18} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              {amenitiesRight.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  className="flex items-center space-x-3"
                >
                  <Check className="text-[#8b5e34]" size={18} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;