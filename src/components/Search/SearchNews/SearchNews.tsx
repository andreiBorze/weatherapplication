import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import { fetchNews } from "../../../store/fetchNews";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  SearchButton,
  SearchElement,
  SearchIcon,
  SearchInput,
  StyledSelect,
} from "./styled";
import MethodButtons from "./MethodButtons";

const SearchNews: React.FC = () => {
  
  const dispatch = useDispatch();

  const [subject, setSubject] = useState("");
  const [sortBy, setSortBy] = useState("relevancy");
  const [pageSize, setPageSize] = useState<number>(10);
  const [country, setCountry] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("Global News");

  // useEffect(() => {
  //   if (!subject) {
  //     return;
  //   }
  // }, [subject]);

  const onSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const onGetNewsBtnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent form submission
    dispatch(
      fetchNews({
        subject,
        country,
        sortBy,
        selectedMethod,
        page: 1,
        pageSize: pageSize,
      }) as unknown as PayloadAction<string | [any, any]>
    );
  };

  type SelectProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };

  const Select = ({ value, onChange }: SelectProps) => {
    return (
      <StyledSelect
        className="form-control category"
        value={value}
        onChange={onChange}
      >
        <option value="relevancy">Relevanță</option>
        <option value="popularity">Popularitate</option>
        <option value="publishedAt">Data publicării</option>
      </StyledSelect>
    );
  };

  const SelectNumber = ({ value, onChange }: SelectProps) => {
    return (
      <StyledSelect
        className="form-control category"
        value={value}
        onChange={onChange}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </StyledSelect>
    );
  };

  const SelectCountry = ({ value, onChange }: SelectProps) => {
    return (
      <StyledSelect
        className="form-control country"
        value={value}
        onChange={onChange}
      >
        <option value="ae">Emiratele Arabe Unite</option>
        <option value="au">Australia</option>
        <option value="be">Belgia</option>
        <option value="bg">Bulgaria</option>
        <option value="br">Brazilia</option>
        <option value="ca">Canada</option>
        <option value="ch">Elveția</option>
        <option value="cn">China</option>
        <option value="co">Columbia</option>
        <option value="cz">Cehia</option>
        <option value="de">Germania</option>
        <option value="eg">Egipt</option>
        <option value="fr">Franța</option>
        <option value="gb">Regatul Unit</option>
        <option value="gr">Grecia</option>
        <option value="hk">Hong Kong</option>
        <option value="id">Indonezia</option>
        <option value="ie">Irlanda</option>
        <option value="il">Israel</option>
        <option value="in">India</option>
        <option value="it">Italia</option>
        <option value="jp">Japonia</option>
        <option value="kr">Coreea de Sud</option>
        <option value="lt">Lituania</option>
        <option value="lv">Letonia</option>
        <option value="ma">Maroc</option>
        <option value="mx">Mexic</option>
        <option value="my">Malaezia</option>
        <option value="ng">Nigeria</option>
        <option value="nl">Olanda</option>
        <option value="no">Norvegia</option>
        <option value="nz">Noua Zeelandă</option>
        <option value="ph">Filipine</option>
        <option value="pl">Polonia</option>
        <option value="pt">Portugalia</option>
        <option value="ro" selected>
          România
        </option>
        <option value="rs">Serbia</option>
        <option value="ru">Rusia</option>
        <option value="sa">Arabia Saudită</option>
        <option value="se">Suedia</option>
        <option value="sg">Singapore</option>
        <option value="si">Slovenia</option>
        <option value="sk">Slovacia</option>
        <option value="th">Thailanda</option>
        <option value="tr">Turcia</option>
        <option value="tw">Taiwan</option>
        <option value="ua">Ucraina</option>
        <option value="us">Statele Unite ale Americii</option>
        <option value="ve">Venezuela</option>
        <option value="za">Africa de Sud</option>
      </StyledSelect>
    );
  };

  return (
    <div className="SearchNewsContainer">
      <div>
        <MethodButtons
          selectedMethod={selectedMethod}
          setSelectedMethod={setSelectedMethod}
        />
        <form onSubmit={onGetNewsBtnClick}>
          <SearchElement>
            <SearchIcon />
            {selectedMethod === "Global News" && (
              <DebounceInput
                element={SearchInput}
                debounceTimeout={300}
                onChange={onSearchInputChanged}
                placeholder="Căutați"
                list="city-list"
              />
            )}
            {selectedMethod === "Global News" && (
              <Select
                value={sortBy}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSortBy(e.target.value)
                }
              />
            )}

            {selectedMethod === "Top News" && (
              <SelectCountry
                value={country.toString()}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCountry(e.target.value)
                }
              />
            )}
            <SelectNumber
              value={pageSize.toString()}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setPageSize(parseInt(e.target.value))
              }
            />
            <SearchButton type="submit">Căutați</SearchButton>
          </SearchElement>
        </form>
      </div>
    </div>
  );
};

export default SearchNews; 