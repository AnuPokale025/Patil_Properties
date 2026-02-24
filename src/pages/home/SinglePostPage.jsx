import React from "react";

const SinglePostPage = () => {
  
    return (
        <div className="w-full min-h-screen bg-gray-100">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[300px] md:h-[400px] w-full">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-sans font-bold">
                        News
                    </h1>
                </div>
            </section>

            {/* ================= MAIN CONTENT ================= */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">

                        {/* Post Image */}
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                            alt="Post"
                            className="w-full h-[350px] object-cover"
                        />

                        {/* Post Header */}
                        <div className="bg-amber-700 text-white p-6">
                            <h2 className="text-2xl font-semibold">
                                Standard Post Format
                            </h2>
                            <p className="text-sm mt-2 opacity-90">
                                By Fahid Posted in Luxury On December 13, 2021
                            </p>
                        </div>

                        {/* Post Content */}
                        <div className="p-8 text-[#808080] leading-7 space-y-6">

                            <p>
                                Enthusiastically disintermediate progressive innovation before
                                high-payoff metrics. Intrinsically generate sticky services
                                without B2B e-services.
                            </p>

                            <p>
                                Professionally transform enterprise architectures with
                                client-centered leadership skills. Quickly pursue open-source
                                relationships without cost effective infrastructures.
                            </p>

                            <p>
                                Conveniently procrastinate flexible e-markets and effective
                                intellectual capital. Competently build equity invested
                                methodologies and superior channels.
                            </p>

                            {/* H2 Section */}
                            <h2 className="text-3xl font-serif text-gray-800 pt-6">
                                This is H2 Heading
                            </h2>

                            <p>
                                Holistically scale client-focused growth strategies rather than
                                go forward potentialities. Continually incubate prospective action
                                items with unique architectures.
                            </p>

                            <ol className="list-decimal pl-6 space-y-3">
                                <li>
                                    Morbi in sem quis dui placerat ornare.
                                </li>
                                <li>
                                    Praesent dapibus, neque id cursus faucibus.
                                </li>
                                <li>
                                    Phasellus ultrices nulla quis nibh.
                                </li>
                                <li>
                                    Pellentesque fermentum dolor.
                                </li>
                                <li>
                                    Sed adipiscing ornare risus.
                                </li>
                            </ol>

                            {/* H3 Section */}
                            <h3 className="text-2xl font-serif text-gray-800 pt-6">
                                This is H3 Heading
                            </h3>

                            <p>
                                Continually evolve open-source systems for highly efficient
                                deliverables. Seamlessly extend dynamic content vis-à-vis reliable
                                meta-services.
                            </p> 
                            
                            <div className="sec p-5 bg-amber-100 ">
                                <h6>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</h6>
                            </div>
                            <p>Proactively synthesize effective methodologies and synergistic networks. Dramatically envisioneer distinctive models with go forward supply chains. Competently extend client-centered markets through client-based value. Efficiently communicate web-enabled manufactured products after fully researched total linkage. Dynamically recaptiualize cooperative relationships after client-based internal or “organic” sources.

                                Holisticly monetize low-risk high-yield platforms with standardized growth strategies. Assertively plagiarize bricks-and-clicks methods of empowerment with enabled initiatives. Uniquely disseminate magnetic human capital whereas functional web-readiness. Collaboratively promote fully researched communities via resource maximizing markets. Efficiently repurpose state of the art e-business with innovative bandwidth.</p>

                        </div>
                    </div>

                    {/* ================= SIDEBAR ================= */}
                    <div className="space-y-8">

                        {/* Recent Posts */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">
                                Recent Posts
                            </h3>

                            <ul className="space-y-3 text-gray-600">
                                <li className="hover:text-amber-700 cursor-pointer transition">
                                    ▸ Standard Post Format
                                </li>
                                <li className="hover:text-amber-700 cursor-pointer transition">
                                    ▸ Image Post Format
                                </li>
                                <li className="hover:text-amber-700 cursor-pointer transition">
                                    ▸ Gallery Post Format
                                </li>
                                <li className="hover:text-amber-700 cursor-pointer transition">
                                    ▸ Video Post Format
                                </li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">
                                Categories
                            </h3>

                            <ul className="space-y-3 text-gray-600">
                                <li className="hover:text-amber-700 cursor-pointer transition">
                                    ▸ Luxury
                                </li>
                                <li className="hover:text-amber-700 cursor-pointer transition">
                                    ▸ Market Trends
                                </li>
                            </ul>
                        </div>

                        {/* Tags */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">
                                Tags
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    "awareness",
                                    "contemporary",
                                    "economy living",
                                    "image post",
                                    "interior",
                                    "living rooms",
                                    "studio",
                                    "trendy",
                                ].map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-amber-700 text-white px-4 py-2 text-sm rounded hover:bg-amber-800 transition cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">
                                Contact Us
                            </h3>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                                />
                                <textarea
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SinglePostPage;