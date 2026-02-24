import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloorPlans() {
  const images = [
    "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/Amenities-1-600x600.jpg",
    "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/Amenities-2-600x600.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
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
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#f4f1ec] py-20 px-6 overflow-hidden">
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
            Floor Plans
          </h2>
          <p className="text-gray-500 mt-4">
            Amazingly Constructed and Well Maintained Spaces
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Image Slider */}
          <div className="relative">
            <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Floor Plan"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
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

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            
            {/* Brown Feature Box */}
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-[#8b6239] text-white p-8 flex flex-col justify-center"
            >
              <h3 className="text-xl font-semibold mb-6">
                The Ultimate Planning
              </h3>

              <ul className="space-y-4 text-sm">
                {[
                  "— Dashing Drawing Room",
                  "Master Bedroom",
                  "Swimming Pool Area",
                  "Garden Space",
                  "Indoor Activities",
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariant}>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Details */}
            <motion.div
              variants={containerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8"
            >
              <h3 className="text-2xl font-serif mb-6 text-gray-800">
                Excellent living with spacious bedroom
              </h3>

              <div className="space-y-4 text-sm text-gray-600">
                {[
                  ["Bedroom Size", "2130 Sq. Ft"],
                  ["Bathroom Size", "1150 Sq. Ft"],
                  ["Gallery 1 Size", "400 Sq. Ft"],
                  ["Gallery 2 Size", "680 Sq. Ft"],
                  ["King Size Bed", "100 Sq. Ft"],
                ].map(([label, value], index) => (
                  <motion.div
                    key={index}
                    variants={itemVariant}
                    className="flex justify-between border-b pb-2 last:border-none"
                  >
                    <span>{label}</span>
                    <span className="font-medium text-gray-800">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}