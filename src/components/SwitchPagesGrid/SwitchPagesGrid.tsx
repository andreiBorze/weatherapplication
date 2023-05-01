import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import {
  NavItem,
  NavLink,
  NavList,
  SwitchPagesGridContainer,
} from "./SwitchPagesGridStyle";
import { setIsInitial, setIsLoading, toggleDarkMode } from "../../store/reducers/appReducer";
import { AppStore } from "../../store/store";
import DarkModeToggle from "react-dark-mode-toggle";

const SwitchPagesGrid: React.FC = () => {
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  const dispatch = useDispatch();
  const { isInitial } = useSelector((state: AppStore) => ({
    isInitial: state.app.isInitial,
  }));

  const location = useLocation();

  useEffect(() => {
    dispatch(setIsInitial(true));
  }, [location]);

  return (
    <SwitchPagesGridContainer>
      <NavList>
        <NavItem>
          <NavLink to="/home"> Home </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/weather"> Vremea </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/news"> Știri </NavLink>
        </NavItem>
        <DarkModeToggle
          checked={isDarkMode}
          onChange={() => dispatch(toggleDarkMode())}
          size={60}
        />
      </NavList>
      <Outlet />
    </SwitchPagesGridContainer>
  );
};

export default SwitchPagesGrid;
