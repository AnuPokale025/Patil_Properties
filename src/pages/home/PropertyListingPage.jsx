import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PropertyListingPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Static properties data
  const staticProperties = [
    {
      _id: "1",
      title: "Luxury Modern Villa in Coral Gables",
      price: 2500000,
      listingType: "sale",
      address: {
        street: "1234 Aragon Ave",
        city: "Coral Gables",
        country: "Florida"
      },
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      area: 3560,
      images: [
        "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/slide-one-f-1.jpg"
      ]
    },
    {
      _id: "2",
      title: "Contemporary Beachfront Condo",
      price: 1850000,
      listingType: "sale",
      address: {
        street: "5678 Ocean Drive",
        city: "Miami Beach",
        country: "Florida"
      },
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      area: 2400,
      images: [
        "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/slide-two.jpg"
      ]
    },
    {
      _id: "3",
      title: "Elegant Waterfront Estate",
      price: 3200000,
      listingType: "sale",
      address: {
        street: "9012 Bay View Court",
        city: "Coconut Grove",
        country: "Florida"
      },
      bedrooms: 5,
      bathrooms: 4,
      parking: 3,
      area: 4500,
      images: [
        "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/Property-2.jpg"
      ]
    },
    {
      _id: "4",
      title: "Charming Historic Home",
      price: 1200000,
      listingType: "sale",
      address: {
        street: "3456 Heritage Lane",
        city: "Coral Gables",
        country: "Florida"
      },
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      area: 2200,
      images: [
        "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/spacejoy-c6SxfCFLNhE-unsplash-600x600.jpg"
      ]
    },
    {
      _id: "5",
      title: "Modern Architectural Masterpiece",
      price: 2800000,
      listingType: "sale",
      address: {
        street: "7890 Modern Ave",
        city: "Wynwood",
        country: "Florida"
      },
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      area: 3800,
      images: [
        "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/slide-one-f-1.jpg"
      ]
    },
    {
      _id: "6",
      title: "Luxurious Penthouse Suite",
      price: 4100000,
      listingType: "sale",
      address: {
        street: "2345 Sky Tower",
        city: "Brickell",
        country: "Florida"
      },
      bedrooms: 4,
      bathrooms: 4,
      parking: 3,
      area: 3600,
      images: [
        "https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/10/slide-two.jpg"
      ]
    }
  ];

  const handleClick = (id) => {
    navigate(`/properties/${id}`);
  };

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setProperties(staticProperties);
      setLoading(false);
    }, 500);
  }, []);

  // 🔄 Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading properties...
      </div>
    );
  }

  // ❌ Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        {error}
      </div>
    );
  }

  // 📭 Empty State
  if (properties.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        No Properties Available
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Available Properties
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Property Image */}
              <div
                className="h-56 w-full bg-gray-200 cursor-pointer"
                onClick={() => handleClick(property._id)}
              >
                <img
                  src={
                    property.images?.length > 0
                      ? property.images[0]
                      : "https://via.placeholder.com/400x300?text=No+Image"
                  }
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Property Details */}
              <div className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">
                  {property.title}
                </h2>

                <p className="text-gray-600 text-sm">
                  {property.address?.street && `${property.address.street}, `}
                  {property.address?.city}, {property.address?.country}
                </p>

                <p className="text-indigo-600 font-bold text-xl">
                  ₹ {property.price?.toLocaleString()}
                  {property.listingType === "rent" && " / month"}
                </p>

                <div className="flex justify-between text-sm text-gray-700">
                  <span>🏠 {property.area} {property.areaUnit}</span>
                  <span>🛏 {property.bedrooms} Beds</span>
                  <span>🛁 {property.bathrooms} Bath</span>
                  <span>🚗 {property.parking} Parking</span>
                </div>

                {/* ✅ View Details Button */}
                <button
                  onClick={() => handleClick(property._id)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;