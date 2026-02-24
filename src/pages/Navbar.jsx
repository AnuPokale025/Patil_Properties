import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/feature" },
    { name: "About", path: "/about" },
    { name: "Amenities", path: "/amenities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Floor Plans", path: "/floorplans" },
    { name: "Video", path: "/video-tour" },
    { name: "Location", path: "/location" },
  ];

  const handleNavClick = () => {
    setMobileMenu(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "transparent text-white"
      }`}
    >
      <div
        className={`flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-4 md:py-5 transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer">
          <a href="/">
            Patil <span className="font-light">Properties</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`pb-1 border-b-2 border-transparent transition ${
                scrolled
                  ? "hover:text-gray-600 hover:border-gray-600"
                  : "hover:text-gray-300 hover:border-gray-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded transition ${
            scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div
          className={`lg:hidden flex flex-col px-4 py-4 space-y-2 transition ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-black/95 text-white"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={handleNavClick}
              className={`px-4 py-3 rounded transition block ${
                scrolled
                  ? "hover:bg-gray-100"
                  : "hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 