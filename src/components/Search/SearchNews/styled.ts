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

export const StyledSelect = styled.select`
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: none;
  padding-bottom: 2em;
`;

export const ButtonContainer = styled.div`
  border: 1px solid black;
  color: black;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 1em;
  transition: all 0.3s ease;
  background-color: #8f8d83;

  &:hover {
    background-color: white;
  }
`;

export const ActiveButton = styled(ButtonContainer)`
  background-color: #ffd700;
`;
