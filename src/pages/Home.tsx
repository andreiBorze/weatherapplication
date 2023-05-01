import React, { useEffect } from "react";
import Spinner from "../components/ui/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../store/store";
import { setIsLoading } from "../store/reducers/appReducer";
import { stat } from "fs";

const Home = () => {

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
      {!isLoading && <div style={{display: 'flex', justifyContent: 'center'}}>Home page</div>}
    </>
  );
};

export default Home;


