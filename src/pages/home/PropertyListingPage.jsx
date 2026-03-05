import React, { useEffect, useState } from "react";
import { getProperties } from "../../api/property.api";
import { useNavigate } from "react-router-dom";

const PropertyListingPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ Navigate using property ID
  const handleClick = (id) => {
    navigate(`/properties/${id}`);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const res = await getProperties();
      setProperties(res.data?.data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load properties");
    } finally {
      setLoading(false);
    }
  };

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