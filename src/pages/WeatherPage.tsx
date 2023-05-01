import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forecast from "../components/Forecast/Forecast";
import Header from "../components/Header/Header";
import Search from "../components/Search/SearchWeather/Search";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import { AppStore } from "../store/store";
import { setIsLoading } from "../store/reducers/appReducer";
import Spinner from "../components/ui/Spinner/Spinner";

const WeatherPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: AppStore) => ({
    isLoading: state.app.isLoading,
  }));

  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => dispatch(setIsLoading(false)), 0);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <Header titleHeader={"Vremea"} />
      <Search />
      <CurrentWeather />
      <Forecast />
    </>
  );
};

export default WeatherPage;
