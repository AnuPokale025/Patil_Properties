import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || Object.values(navLinks).some(link => isActive(link.path))
          ? "bg-white shadow-md shadow-b-2"
          : "bg-transparent"
      }`}
    >
      <div
        className={`flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-4 md:py-5 transition-colors duration-300 ${
          scrolled || Object.values(navLinks).some(link => isActive(link.path))
            ? "text-black"
            : "text-white"
        }`}
      >
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer"
        >
          Patil <span className="font-light">Properties</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`pb-1 border-b-2 transition ${
                isActive(link.path)
                  ? "text-black border-black"
                  : scrolled
                  ? "text-gray-600 border-transparent hover:border-gray-600"
                  : "text-gray-300 border-transparent hover:border-gray-300"
              }`}
            >
              {link.name}
            </Link>
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
          className={`lg:hidden flex flex-col px-4 py-4 space-y-2 transition shadow-b-2 shadow-md ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-black/95 text-white"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenu(false)}
              className={`px-4 py-3 rounded transition block ${
                isActive(link.path)
                  ? "bg-white text-black font-semibold"
                  : scrolled
                  ? "hover:bg-gray-100"
                  : "hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;