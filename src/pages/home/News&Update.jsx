import React from "react";
import { useNavigate } from "react-router-dom";

const NewsAndUpdate = () => {
    const navigate = useNavigate();
    const handle = () => {
        navigate("/news1");
    }
    return (
        <div  className="w-full px-6 md:px-16 py-16 bg-white">

            {/* Heading Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-serif text-[24] text-[#8c6239] ">News & Updates</h1>
                <p className="text-gray-500 mt-2">
                    From Real Estate Industry and Beyond
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* Card 1 */}
                <div onClick={handle} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src="https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/09/slider-2-1-680x510.jpg"
                            alt="Luxury House"
                            className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="p-6">
                        <p className="text-sm text-[#8c6239] font-sans font-semibold mb-2">
                            In Luxury
                        </p>

                        <h2 className="text-xl font-serif font-[21] text-[#8c6239] mb-3 group-hover:text-[#8c6239] transition duration-300">
                            Standard Post Format
                        </h2>

                        <p className="text-[#A5A19E] text-[15px] leading-relaxed">
                            Enthusiastically disintermediate progressive innovation before
                            high-payoff metrics. Intrinsicly generate sticky ideas before.
                        </p>


                    </div>
                </div>
                {/* Card 2 */}
                <div onClick={handle} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src="https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2020/06/spacejoy-RqO6kwm4tZY-unsplash-680x510.jpg"
                            alt="Luxury House"
                            className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="p-6">
                        <p className="text-sm text-[#8c6239] font-sans font-semibold mb-2">
                            In Luxury
                        </p>

                        <h2 className="text-xl font-serif font-[21] text-[#8c6239] mb-3 group-hover:text-[#8c6239] transition duration-300">
                            Image Post Format
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Enthusiastically disintermediate progressive innovation before high-payoff metrics. Intrinsicly generate sticky…
                        </p>


                    </div>
                </div>{/* Card 3 */}
                <div onClick={handle} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">

                    {/* Image */}
                    <div className="overflow-hidden">
                        <img
                            src="https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2020/06/spacejoy-B57FFmfkP7w-unsplash-680x510.jpg"
                            alt="Luxury House"
                            className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                        />
                    </div>

                    {/* Description */}
                    <div className="p-6">
                        <p className="text-sm text-[#8c6239] font-sans font-semibold mb-2">
                            In Luxury
                        </p>

                        <h2 className="text-xl font-serif font-[21] text-[#8c6239] mb-3 group-hover:text-[#8c6239] transition duration-300">
                            Gallery Post Format
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Competently harness enterprise vortals via revolutionary e-tailers. Monotonectally recaptiualize one-to-one…
                        </p>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsAndUpdate;
