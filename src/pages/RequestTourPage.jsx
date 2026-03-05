import React, { useState } from "react";
import RequestTour from "./home/RequestTour";
import Footer from "./Footer";

const RequestTourPage = () => {
  return (
    <div className="w-full pt-20">
      <RequestTour />
      <Footer />
    </div>
  );
};

export default RequestTourPage;
