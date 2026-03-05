import React, { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import api from "../../api/property.api";
import * as api from "../../api/property.api"; // Import all API functions

const FeaturesSection = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH FEATURED PROPERTIES =================
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await api.getFeaturedProperties();
        // console.log("Featured Properties:", res.data);  

        setProperties(res?.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch featured properties", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  // ================= NAVIGATION =================
  const handleClick = (id) => {
    navigate(`/properties/${id}`);
  };

  // ================= ANIMATION =================
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
            Featured Properties
          </p>
          <h2 className="text-5xl font-serif text-[#8b5e34]">
            Our Premium Listings
          </h2>
        </div>

        {loading ? (
          <div className="text-center text-lg font-semibold">
            Loading Featured Properties...
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {properties.slice(0, 4).map((property) => (
              <motion.div
                key={property._id}
                variants={fadeRight}
                onClick={() => handleClick(property._id)}
                className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {/* Image */}
                <div className="h-56 w-full bg-gray-200">
                  {property.images?.length > 0 ? (
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#8b5e34] mb-2">
                    {property.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-3">
                    {property.address?.city}, {property.address?.country}
                  </p>

                  <p className="text-green-600 font-bold text-lg">
                    ₹ {property.price?.toLocaleString()}
                    {property.listingType === "rent" && " / month"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;