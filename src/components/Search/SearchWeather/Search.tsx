import React, { useEffect, useRef, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../../api/placeSuggestion";
import { useClickOutside } from "../../../hooks/useClickOutside";
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
  SearchResult,
} from "./styled";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchWeather } from "../../../store/fetchWeather";
import Suggestion from "./Suggestion";
import { AppStore } from "../../../store/store";
import { ButtonContainer } from "../SearchNews/styled";
import { NextButton } from "../../News/styled";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const suggestionRef = useRef(null);

  const { country, pageSize, subject, sortBy, selectedMethod } = useSelector(
    (store: AppStore) => ({
      country: store.news.country,
      pageSize: store.news.pageSize,
      subject: store.news.subject,
      sortBy: store.news.sortBy,
      selectedMethod: store.news.selectedMethod,
    })
  );

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setShowSuggestions(true);
    fetchCities(searchTerm).then((res) => {
      setSuggestions(res.map((city: { name: any }) => city.name));
    });
  }, [searchTerm]);

  useClickOutside(suggestionRef, () => setShowSuggestions(false));

  const onSearchInputChanged = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const showPosition = (position: GeolocationPosition) => {
    dispatch(
      fetchWeather({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }) as unknown as PayloadAction<string | [any, any]>
    );
  };


  return (
    <SearchElement>
      <SearchIcon />
      <DebounceInput
        element={SearchInput}
        debounceTimeout={300}
        onChange={onSearchInputChanged}
        placeholder="Căutați locația"
        list="city-list"
      />
      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }}
      >
        <LocationIcon />
      </LocationButton>
      {showSuggestions && (
        <SearchResult ref={suggestionRef}>
          {suggestions?.slice(0, 6)?.map((s, i) => (
            <Suggestion
              key={i}
              label={s}
              hideSuggestionFn={() => {
                setShowSuggestions(false);
              }}
              onClick={() => {
                setSearchTerm(s);
                setShowSuggestions(false);
              }}
            />
          ))}
        </SearchResult>
      )}
      <datalist id="city-list">
        {suggestions.map((s, i) => (
          <option key={i} label={s} />
        ))}
      </datalist>
    </SearchElement>
    
  );
};

export default Search;
