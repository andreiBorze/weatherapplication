import React from "react";
import Temperature from "../CurrentWeather/Temperature";
import { ForecastItemContainer } from "./styled";
import { ExtendedForecastHourlyData } from "../../api/types";

interface ForecastItemProps {
  key: number;
  value: ExtendedForecastHourlyData;
}

const ForecastItem: React.FC<ForecastItemProps> = (props) => {
  const data = props.value;

  const formattedDate = new Date(data.dt_txt).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <ForecastItemContainer>
      <h6>{formattedDate}</h6>
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
      <span>
        <Temperature value={data.main.temp_max} />
        <sup>&deg;</sup>
        <small>/</small>
        <Temperature value={data.main.temp_min} />
        <sup>&deg;</sup>
      </span>
    </ForecastItemContainer>
  );
};

export default ForecastItem;
