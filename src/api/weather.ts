const baseUrl = "https://api.openweathermap.org/data/2.5";

export const fetchWeatherData = async (city: string | { lat: number; lng: number }) => {

  const apiKey = process.env.REACT_APP_REACT_WEATHER_API_KEY ?? "default-api-key";
  let url = `${baseUrl}/weather?q=${city}&appid=${apiKey}`;

  if (typeof city === "object") {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=${apiKey}`;
  }
  return await (await fetch(url)).json();
};

export const fetchExtendedForecastData = async (city: string | { lat: number; lng: number }) => {

  const apiKey = process.env.REACT_APP_REACT_WEATHER_API_KEY ?? "default-api-key";
  let url = `${baseUrl}/forecast?q=${city}&cnt=6&appid=${apiKey}`;

  if (typeof city === "object") {
    url = `${baseUrl}/forecast?lat=${city.lat}&lon=${city.lng}&cnt=6&&appid=${apiKey}`;
  }
  return await (await fetch(url)).json();
};
