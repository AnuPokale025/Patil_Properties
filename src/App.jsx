import { Route, Routes, Navigate } from "react-router-dom";
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
import PropertyListingPage from "./pages/home/PropertyListingPage";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import LogOut from "./auth/LogOut";
import { useAuth } from "./auth/Authcontext";
import PropertyDetail from "./pages/home/PropertyDetail";

function App() {
  const { isAuthenticated, loading } = useAuth();

  // Show loading screen while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-grey-600 text-lg">Loading...</div>
      </div>
    );
  }

  // If not authenticated, show only login and signup pages
  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  // If authenticated, show all pages with navbar
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<FeaturesSection />} />
        <Route path="/about" element={<PropertyStats />} />
        <Route path="/amenities" element={<AmenitiesSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/floorplans" element={<FloorPlans />} />
        <Route path="/video-tour" element={<PropertyVideoTour />} />
        <Route path="/location" element={<LocationSection />} />
        <Route path="/news1" element={<SinglePostPage />} />
        <Route path="/tour" element={<RequestTour />} />
        <Route path="/properties" element={<PropertyListingPage />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/logout" element={<LogOut />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        
      </Routes>
    </>
  );
}

export default App;