import HomeProperty from "./HeroProperty";
import FeaturesSection from "./FeatureSection";
import PropertyStats from "./PropertyStats";
import AmenitiesSection from "./AmenitiesSection";
import GallerySection from "./GallerySection";
import FloorPlans from "./FloorPlans";
import NeighborhoodSection from "../../NeighborhoodSection";
import PropertyVideoTour from "./PropertyVideoTour";
import LocationSection from "./LocationSection";
import RequestTour from "./RequestTour";
import NewsAndUpdate from "./News&Update";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <HomeProperty />
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
      <Footer />
    </>
  );
};

export default Home;