import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { AppStore } from "../store/store";

import CurrentNews from "../components/News/CurrentNews";
import { setIsLoading } from "../store/reducers/appReducer";
import Spinner from "../components/ui/Spinner/Spinner";
import SearchNews from "../components/Search/SearchNews/SearchNews";

const NewsPage = () => {
  
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
      <Header titleHeader="Știri" />
      <SearchNews />
      <CurrentNews />
    </>
  );
};

export default NewsPage;
