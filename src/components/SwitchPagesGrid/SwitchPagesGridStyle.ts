
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SwitchPagesGridContainer = styled.div`
  padding: 2em;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

export const NavItem = styled.li`
  border: 1px solid black;
  color: black;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1em;
  transition: all 0.3s ease;
  background-color: #8f8d83;

  &:hover {
    background-color: white;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.SwitchPagesGrid.textColor};
  padding-bottom: 0.5em;
  border-bottom: 2px solid transparent;
`;