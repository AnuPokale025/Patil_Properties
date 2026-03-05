import api from "./api"; // withCredentials is now enabled for cookies

export const getProperties = () => {
  return api.get("/properties");
};

export const getPropertyById = (property) => {
  console.log("Fetching property with ID:",property.id);
  return api.get(`/properties/${property.id}`);
};

export const getFeaturedProperties = () => {
  return api.get("/properties/featured?limit=10");
}
export const getStatistics = () => {
  return api.get("/properties/stats");
}