import * as React from "react";
import { useDispatch } from "react-redux";
import { SuggestionItem } from "./styled";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "../../../store/fetchWeather";

interface ISuggestionProps {
  label: string;
  hideSuggestionFn: Function;
  onClick(): void;
}

const Suggestion: React.FC<ISuggestionProps> = (props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      fetchWeather(props.label) as unknown as PayloadAction<string | [any, any]>
    );
    props.hideSuggestionFn();
  };

  return (
    <div onClick={onClick}>
      <SuggestionItem>{props.label}</SuggestionItem>
    </div>
  );
};

export default Suggestion;
