import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./app.styled";
import Home from "./pages/Home";
import { AppStore } from "./store/store";
import { darkTheme, lightTheme } from "./theme";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import NewDetailsPage from "./components/News/NewsDetailsPage";
import WeatherPage from "./pages/WeatherPage";
import SwitchPagesGrid from "./components/SwitchPagesGrid/SwitchPagesGrid";
import Footer from "./components/Footer/Footer";
import { setIsInitial, setIsLoading } from "./store/reducers/appReducer";

const App: React.FC = () => {
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <SwitchPagesGrid />
        <Routes>
          <Route index element={<Navigate to="/weather" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:source/:title" element={<NewDetailsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
