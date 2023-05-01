import React from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../store/store";
import ForecastItem from "./ForecastItem";
import { ForecastContainer, ForecastItems, SectionTitle } from "./styled";

const Forecast: React.FC = () => {
  const { forecast, isInitial } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
    isInitial: state.app.isInitial,
    forecast: state.weather.ExtendedForecastHourlyData,
  }));

  if (isInitial) return <></>;

  return (
    <ForecastContainer>
      <SectionTitle>Vremea în următoarele ore</SectionTitle>
      <ForecastItems>
        {forecast.map((item, i) => {
          return <ForecastItem key={i} value={item} />;
        })}
      </ForecastItems>
    </ForecastContainer>
  );
};

export default Forecast;
