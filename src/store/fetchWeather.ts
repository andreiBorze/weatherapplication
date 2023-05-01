import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtendedForecastHourlyData, WeatherData } from '../api/types';
import { fetchExtendedForecastData, fetchWeatherData } from '../api/weather';
import { kelvinToCelcius } from '../utils/unitConversion';
import { setIsInitial, setIsLoading } from './reducers/appReducer';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string | { lat: number; lng: number }, { dispatch, rejectWithValue }) => {

    dispatch(setIsLoading(true));

    try {
      const res = await Promise.all([fetchWeatherData(city), fetchExtendedForecastData(city)]);
      setTimeout(() => dispatch(setIsLoading(false)), 0);
      if (res[0].cod === 200) {
        dispatch(setIsInitial(false));
        return res;
      }
      return rejectWithValue(res[0].message);
    } catch {
      setTimeout(() => dispatch(setIsLoading(false)), 0);
      return rejectWithValue('Error');
    }
  }
);

export const transformWeatherData = (res: any): { weather: WeatherData; forecast: ExtendedForecastHourlyData[]; } => {

  const weather = res[0] as WeatherData;
  const forecast: ExtendedForecastHourlyData[] = [];

  weather.weather.id = res[0].weather[0].id;
  weather.weather.icon = res[0].weather[0].icon;
  weather.weather.description = res[0].weather[0].description;
  weather.weather.main = res[0].weather[0].main;
  weather.main = {
    ...weather.main,
    temp: kelvinToCelcius(weather.main.temp),
    feels_like: kelvinToCelcius(weather.main.feels_like),
    temp_max: kelvinToCelcius(weather.main.temp_max),
    temp_min: kelvinToCelcius(weather.main.temp_min),
  };
  weather.wind.speed = Math.round(weather.wind.speed * 3.6);
  weather.wind.deg = weather.wind.deg;

  res[1].list.forEach((i: any, index: number) => {
    forecast.push({
      dt: i.dt,
      main: {
        ...i.main,
        temp: kelvinToCelcius(i.main.temp),
        feels_like: kelvinToCelcius(i.main.feels_like),
        temp_min: kelvinToCelcius(i.main.temp_min),
        temp_max: kelvinToCelcius(i.main.temp_max),
        pressure: i.main.pressure,
      },
      weather: [
        {
          id: i.weather[0].id,
          main: i.weather[0].main,
          description: i.weather[0].description,
          icon: i.weather[0].icon,
        }
      ],
      clouds: {
        all: i.clouds.all,
      },
      wind: {
        speed: i.wind.speed,
        deg: i.wind.deg,
        gust: i.wind.gust,
      },
      visibility: i.visibility,
      pop: i.pop,
      sys: {
        pod: i.sys.pop,
      },
      dt_txt: i.dt_txt
    });
  });

  return {
    weather,
    forecast,
  };
};
