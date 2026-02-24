import React from "react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
];

const GallerySection = () => {
  return (
    <section className="bg-[#f8C8F97] py-24">
      
      {/* Title */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl font-serif text-[#8b5e34] mb-4">
          Property Photo Gallery
        </h2>
        <p className="text-gray-500 text-lg">
          Elegantly Decorated Home With Iconic Views
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden group">
            <img
              src={img}
              alt="Property"
              className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
