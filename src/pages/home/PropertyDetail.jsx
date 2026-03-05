import React, { useEffect, useState } from "react";
import { MapPin, BedDouble, Bath, Car, Ruler, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../../api/property.api";

const PropertyDetail = () => {
  // ✅ FIXED: get correct param name
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ================= FETCH PROPERTY =================
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        console.log("Hii");
        const res = await getPropertyById(id);

        // console.log("Fetched Property:", res.data);

        setProperty(res?.data?.data);
      } catch (err) {
        setError(
          err?.response?.data?.message || "Failed to load property details"
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-xl font-semibold">
        Loading Property...
      </div>
    );
  }

  // ================= ERROR =================
  if (error) {
    return (
      <div className="h-screen flex justify-center items-center text-red-600 font-semibold">
        {error}
      </div>
    );
  }

  // ================= NOT FOUND =================
  if (!property) {
    return (
      <div className="h-screen flex justify-center items-center text-gray-600 font-semibold">
        Property not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ================= HERO IMAGE ================= */}
      <div className="relative h-[400px] w-full bg-black">
        <img
          src={
            property?.images?.[activeImage] ||
            "https://via.placeholder.com/1200x400"
          }
          alt={property?.title}
          className="w-full h-full object-cover"
        />

        {property?.isFeatured && (
          <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-1 rounded-full flex items-center gap-2 shadow-lg">
            <Star size={16} />
            Featured
          </div>
        )}
      </div>

      {/* ================= IMAGE THUMBNAILS ================= */}
      {property?.images?.length > 1 && (
        <div className="flex gap-3 overflow-x-auto p-4 bg-white shadow">
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => setActiveImage(index)}
              className={`h-20 w-28 object-cover rounded-lg cursor-pointer border-2 ${
                activeImage === index
                  ? "border-blue-600"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
      )}

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Title & Price */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {property?.title}
            </h1>

            <p className="flex items-center gap-2 text-gray-500 mt-2">
              <MapPin size={18} />
              {property?.address?.street}, {property?.address?.city},{" "}
              {property?.address?.country}
            </p>
          </div>

          <div className="text-2xl font-bold text-green-600 mt-4 md:mt-0">
            ₹ {property?.price?.toLocaleString()}
            {property?.listingType === "rent" && " / month"}
          </div>
        </div>

        {/* Property Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-6 rounded-2xl shadow-md mb-8">
          <div className="flex items-center gap-2">
            <BedDouble className="text-blue-600" />
            <span>{property?.bedrooms || 0} Bedrooms</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath className="text-blue-600" />
            <span>{property?.bathrooms || 0} Bathrooms</span>
          </div>

          <div className="flex items-center gap-2">
            <Car className="text-blue-600" />
            <span>{property?.parking || 0} Parking</span>
          </div>

          <div className="flex items-center gap-2">
            <Ruler className="text-blue-600" />
            <span>
              {property?.area || 0} {property?.areaUnit || "sqft"}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-3">Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {property?.description}
          </p>
        </div>

        {/* Amenities & Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {property?.amenities?.length ? (
                property.amenities.map((item, index) => (
                  <li key={index}>{item.replaceAll("_", " ")}</li>
                ))
              ) : (
                <li>No amenities listed</li>
              )}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {property?.features?.length ? (
                property.features.map((item, index) => (
                  <li key={index}>{item.replaceAll("_", " ")}</li>
                ))
              ) : (
                <li>No features listed</li>
              )}
            </ul>
          </div>
        </div>

        {/* Agent Info */}
        {property?.agentId && (
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Agent Information</h2>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-800">
                  {property?.agentId?.fullName}
                </p>
                <p className="text-gray-600">
                  {property?.agentId?.email}
                </p>
                <p className="text-gray-600">
                  {property?.agentId?.phoneNo}
                </p>
              </div>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact Agent
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;