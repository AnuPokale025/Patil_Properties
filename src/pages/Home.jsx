import { useEffect } from "react";
import HomeProperty from "./home/HeroProperty";
import FeaturesSection from "./home/FeatureSection";
import PropertyStats from "./home/PropertyStats";
import AmenitiesSection from "./home/AmenitiesSection";
import GallerySection from "./home/GallerySection";
import FloorPlans from "./home/FloorPlans";
import NeighborhoodSection from "./home/NeighborhoodSection";
import PropertyVideoTour from "./home/PropertyVideoTour";
import LocationSection from "./home/LocationSection";
import RequestTour from "./home/RequestTour";
import NewsAndUpdate from "./home/News&Update";
import Footer from "./Footer";
import "../index.css";
import SinglePostPage from "./home/SinglePostPage";

const Home = () => {

  // Scroll to top whenever Home loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <HomeProperty />

      {/* Main Content Sections */}
      <FeaturesSection />
      <PropertyStats />
      <AmenitiesSection />
      <GallerySection />
      <FloorPlans />
      <NeighborhoodSection />
      <PropertyVideoTour />
      <LocationSection />
      <RequestTour />
      <NewsAndUpdate />
 

      {/* Footer */}
      <Footer/>
      
    </div>
  );
};

export default Home;