import styled from "styled-components";
import { ReactComponent as LocationIconSvg } from "../../../assets/location-icon.svg";
import { ReactComponent as SearchIconSvg } from "../../../assets/search-icon.svg";

export const SearchElement = styled.div`
  display: flex;
  justify-content: Center;
  align-items: center;
  position: relative;
  height: 3.25rem;
  border-radius: 26px;
  background: ${({ theme }) => theme.search.backgroundColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
  margin-bottom: 1rem;
  z-index: 1;
`;
export const SearchIcon = styled(SearchIconSvg)`
  margin-left: 1.2rem;
  fill: ${({ theme }) => theme.search.iconColor};
`;

export const SearchInput = styled.input`
  flex: 1;
  margin-left: 1rem;
  height: 3.25rem;
  border: none;
  background-color: ${({ theme }) => theme.search.backgroundColor};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.search.searchInput.color};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.search.searchInput.placeholderColor};
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.search.button.placeholderColor};
  color: ${({ theme }) => theme.search.button.color};
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 26px;
  margin-right: 1.2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.search.button.hoverColor};
  }
`;

export const LocationButton = styled.button`
  border: 1px solid;
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  display: contents;
  &:hover svg {
  }
`;
export const LocationIcon = styled(LocationIconSvg)`
  margin-right: 1.2rem;
  fill: ${({ theme }) => theme.search.iconColor};
`;
export const SearchResult = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${({ theme }) => theme.searchSuggestion.backgroundColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  width: 98%;
  left: 1%;
  top: 3.35rem;
  border-radius: 5px;
  overflow: hidden;
`;

export const SuggestionItem = styled.a`
  color: ${({ theme }) => theme.searchSuggestion.textColor};
  text-decoration: bold;
  padding: 0.6rem 1rem;
  display: block;
  text-align: left;
  border-bottom: 1px dotted
    ${({ theme }) => theme.searchSuggestion.seperatorLineColor};
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme.searchSuggestion.hoverBackgroundColor};
  }
`;

