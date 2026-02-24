import React from "react";
import { Home, CheckSquare, Globe, Gem } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const FeaturesSection = () => {
   const navigate = useNavigate();
  const Tour = () => {
    navigate("/tour");
  } 
  // Animation Variants
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Great Features
          </p>

          <h2 className="text-5xl font-serif text-[#8b5e34] leading-tight mb-6">
            Classic Interiors <br /> & Exteriors
          </h2>

          <p className="text-gray-500 mb-8 text-lg leading-relaxed max-w-md">
            Generously sized, this home delivers the very best Interiors &
            exteriors.
          </p>

          <motion.button onClick={Tour}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8b5e34] text-white px-8 py-4 rounded-lg transition"
          >
            Schedule a Tour
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="grid sm:grid-cols-2 gap-12"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Feature 1 */}
          <motion.div variants={fadeRight}>
            <Home className="text-[#8b5e34] mb-4" size={48} />
            <h3 className="text-xl font-serif text-[#8b5e34] mb-3">
              Latest Property
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Tasteful and seem-less renovation, this home is a unique refreshing.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div variants={fadeRight}>
            <CheckSquare className="text-[#8b5e34] mb-4" size={48} />
            <h3 className="text-xl font-serif text-[#8b5e34] mb-3">
              Awesome Area
            </h3>
            <p className="text-gray-500 leading-relaxed">
              This suite offers outstanding views of the city, ocean and mountains.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div variants={fadeRight}>
            <Globe className="text-[#8b5e34] mb-4" size={48} />
            <h3 className="text-xl font-serif text-[#8b5e34] mb-3">
              Great Surroundings
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Coral Gables provides a coastal lifestyle in a tropical setting.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div variants={fadeRight}>
            <Gem className="text-[#8b5e34] mb-4" size={48} />
            <h3 className="text-xl font-serif text-[#8b5e34] mb-3">
              Supreme Location
            </h3>
            <p className="text-gray-500 leading-relaxed">
              It is ideally situated on a very private lot along a whisper quiet street.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;