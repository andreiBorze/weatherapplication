import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as HighIcon } from "../../assets/high-icon.svg";
import { ReactComponent as HumidityIcon } from "../../assets/humidity-icon.svg";
import { ReactComponent as LowIcon } from "../../assets/low-icon.svg";
import { ReactComponent as PressureIcon } from "../../assets/pressure-icon.svg";
import { ReactComponent as WindIcon } from "../../assets/wind-icon.svg";
import { AppStore } from "../../store/store";
import { changeTempUnit } from "../../store/reducers/appReducer";
import { kmToMile, TempUnit } from "../../utils/unitConversion";
import ToggleSwitch from "../ui/ToggleSwitch/ToggleSwitch";
import Temperature from "./Temperature";
import {
  CurrentWeatherStatus,
  CurrentWeatherContainer,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  InfoRow,
  SectionTitle,
  WeatherContainer,
  WeatherDegree,
  CurrentWeatherOverview,
} from "./styled";

const CurrentWeather: React.FC = () => {

  const dispatch = useDispatch();

  const { weather, degreeType, isInitial, isError } = useSelector(
    (store: AppStore) => ({
      weather: store.weather.weatherData,
      degreeType: store.app.tempUnit,
      isInitial: store.app.isInitial,
      isError: store.weather.isError,
    })
  );

  useEffect(() => {
    if (isError) {
      console.log("Cannot load weather for this place");
    }
  }, [isError]);

  if (isInitial) return <></>;
  return (
    <WeatherContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SectionTitle>Vremea în acest moment în {weather.name}</SectionTitle>
        <div>
          <ToggleSwitch onClick={() => dispatch(changeTempUnit())} />
        </div>
      </div>
      <CurrentWeatherContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
          }}
        >
          <CurrentWeatherOverview>
            <h4>{weather.name}</h4>
            <p>{weather.weather.description}</p>
          </CurrentWeatherOverview>
          <CurrentWeatherStatus>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`}
              alt="Weather icon"
            />
            <h2>
              <Temperature value={Math.round(weather.main.temp)} />°
            </h2>
          </CurrentWeatherStatus>
        </div>
        <CurrentWeatherInfo>
          <FeelsLike>
            Se simte ca <Temperature value={weather.main.feels_like} />
            <sup>&deg;</sup>
          </FeelsLike>
          <HighLowContainer>
            <WeatherDegree>
              <HighIcon />
              <Temperature value={weather.main.temp_max} />
              <sup>&deg;</sup>
            </WeatherDegree>
            <WeatherDegree>
              <LowIcon />
              <Temperature value={weather.main.temp_min} />
              <sup>&deg;</sup>
            </WeatherDegree>
          </HighLowContainer>
          <InfoRow>
            <div>
              <HumidityIcon /> Umiditate
            </div>
            <span>{weather.main.humidity}%</span>
          </InfoRow>
          <InfoRow>
            <div>
              <WindIcon /> Vânt
            </div>
            <span>
              {degreeType === TempUnit.CELCIUS
                ? weather.wind.speed
                : kmToMile(weather.wind.speed)}
              {degreeType === TempUnit.CELCIUS ? "kph" : "mph"}
            </span>
          </InfoRow>
          <InfoRow>
            <div>
              <PressureIcon /> Presiune
            </div>
            <span>{weather.main.pressure}hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default CurrentWeather;
