import React, { useEffect, useState } from "react";
import {
  Plane,
  Trees,
  GraduationCap,
  Hospital,
  Train,
  Landmark,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NeighborhoodSection() {
  const places = [
    { icon: Plane, label: "Airport", distance: "1.5 Km" },
    { icon: Trees, label: "Children Park", distance: "2.0 Km" },
    { icon: GraduationCap, label: "University / College", distance: "08 Km" },
    { icon: Hospital, label: "Hospital & Clinic", distance: "3.2 Km" },
    { icon: Train, label: "Railway Station", distance: "1.7 Km" },
    { icon: Landmark, label: "Bank & ATM", distance: "2.8 Km" },
  ];

  const images = [
    "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/Railway-Station.jpg",
    "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/Clay-Banks.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Variants
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="bg-[#f8f7f3] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#7a5c3e]">
            Find Your Neighborhood
          </h2>
          <p className="text-gray-500 mt-4">
            Surrounded by Some Best Places and Amenities
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Card */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#ebe6df] rounded-2xl shadow-lg p-8 z-10 md:-mr-20"
          >
            <ul className="space-y-6">
              {places.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={index}
                    variants={itemVariant}
                    className="flex items-center justify-between border-b pb-4 last:border-none"
                  >
                    <div className="flex items-center gap-3 text-[#7a5c3e] font-medium">
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-gray-700 font-semibold">
                      {item.distance}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Right Image Slider */}
          <div className="relative">
            <div className="relative w-full h-[450px] overflow-hidden rounded-2xl shadow-xl">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Neighborhood"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.6 }}
                  className="absolute w-full h-full object-cover"
                />
              </AnimatePresence>

            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <motion.span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  animate={{
                    scale: index === currentIndex ? 1.2 : 1,
                  }}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? "bg-[#7a5c3e]"
                      : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}