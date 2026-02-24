import React, { useState, useEffect } from "react";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroProperty = () => {
  const navigate = useNavigate();
  const Tour = () => {
    navigate("/tour");
  } 
  const images = [
    "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/slide-one-f-1.jpg",
    "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/slide-two.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Property"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-700 text-white p-4 rounded-md z-20 hover:bg-amber-800"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-700 text-white p-4 rounded-md z-20 hover:bg-amber-800"
      >
        <ChevronRight size={24} />
      </button>

      {/* Info Card */}
      <div className="absolute  right-6 md:right-16 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 max-w-lg z-20 ">

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-2" />
          Aragon Ave, Coral Gables, FL 33134
        </div>

        <h1 className="text-2xl md:text-4xl font-serif font-bold text-amber-900 mb-6">
          Gables Grand Plaza Apartments
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
          Our premium furnished apartments feature allow you and your favorite
          pet to enjoy all at Gables Grand Plaza!
        </p>

        <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900">
            $625,000
          </h2>

          <button onClick={Tour} className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition w-full sm:w-auto">
            Schedule a Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroProperty;