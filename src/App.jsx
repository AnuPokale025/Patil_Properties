import { Route, Routes } from "react-router-dom";
import AmenitiesSection from "./pages/home/AmenitiesSection";
import FeaturesSection from "./pages/home/FeatureSection";
import FloorPlans from "./pages/home/FloorPlans";
import GallerySection from "./pages/home/GallerySection";
import LocationSection from "./pages/home/LocationSection";
import PropertyVideoTour from "./pages/home/PropertyVideoTour";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import "../src/index.css";
import PropertyStats from "./pages/home/PropertyStats";
import SinglePostPage from "./pages/home/SinglePostPage";
import RequestTour from "./pages/home/RequestTour";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<FeaturesSection />} />
        <Route path="/about" element={<PropertyStats />} />
        <Route path="/amenities" element={<AmenitiesSection/>} />
        <Route path="/gallery" element={<GallerySection/>} />
        <Route path="/floorplans" element={<FloorPlans/>} />
        <Route path="/video-tour" element={<PropertyVideoTour/>} />
        <Route path="/location" element={<LocationSection/>} />
        <Route path="/news1" element={<SinglePostPage/>} />
        <Route path="/tour" element={<RequestTour />} />
      </Routes>
    </>
  );
}

export default App;