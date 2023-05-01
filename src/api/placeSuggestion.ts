export const fetchCities = async (search: string) => {
  try {
    const apiKey = process.env.REACT_APP_CITY_API_KEY ?? "default-api-key";
    const headers: HeadersInit = {
      "x-api-key": apiKey,
    };
    console.log("fetchCities Api ....." + apiKey);
    const response = await fetch(
      `https://api.api-ninjas.com/v1/city?name=${search}&limit=20`,
      {
        method: "GET",
        headers,
        redirect: "follow",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};
