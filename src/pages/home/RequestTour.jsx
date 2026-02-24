import React from "react";
import { useNavigate } from "react-router-dom";

export default function RequestTour() {
  const navigate = useNavigate();
  const Tour = () => {
    navigate("/tour");
  }
  return (
    <section
      className="relative bg-cover bg-center py-24 px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#5b4636]/70"></div>

      <div className="relative max-w-5xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif mb-3">
          Request A Tour
        </h2>
        <p className="text-gray-200 mb-14">
          Get in Touch With Us for Any Questions & Help
        </p>

        {/* Form Card */}
        <div className="bg-white text-gray-700 rounded-2xl shadow-2xl p-8 md:p-10 text-left">

          <form className="space-y-8">
            
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-[#8C6239] mb-2">
                  Hey my name is
                </label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b6239] py-2"
                />
              </div>

              <div>
                <label className="block text-[#8C6239] mb-2">
                  and my email id is
                </label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b6239] py-2"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-[#8b6239] mb-2">
                and phone number is
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b6239] py-2"
              />
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-[#8C6239] mb-2">
                I would like to schedule a tour at date and time
              </label>
              <input
                type="datetime-local"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b6239] py-2"
              />
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-[#8C6239] mb-2">
                I would like to discuss about
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-[#8b6239] py-2"
              />
            </div>

            {/* Button */}
            <div>
              <button onClick={Tour}
                type="submit"
                className="bg-[#8b6239] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#744f2e] transition"
              >
                Schedule a Tour
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
