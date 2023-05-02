import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.CurrentWeather.containerBgColor};
  backdrop-filter: blur(5px);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  padding: 1.5rem 2rem;
`;
export const SectionTitle = styled.h3`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.CurrentWeather.textColor};
`;
export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const CurrentWeatherStatus = styled.div`
  background: ${({ theme }) =>
    theme.CurrentWeather.temperatureContainer.containerBgColor};
  border-radius: 500px;
  width: 200px;
  height: 200px;
  align-items: center;
  display: flex;
  margin: auto;
  box-shadow: 0 30px 20px #1d1d1d36;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin: 2rem 0rem;
  }

  h2 {
    margin: 0;
    font-size: 60px;
    font-weight: 300;
  }
`;
export const CurrentWeatherInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 1rem;
  margin-left: 2rem;
`;
export const FeelsLike = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.CurrentWeather.textColor};
`;
export const HighLowContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 2rem;
`;
export const WeatherDegree = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.CurrentWeather.textColor};
  margin-top: 0.8rem;
  margin-right: 2.5rem;
  svg {
    fill: ${({ theme }) => theme.CurrentWeather.textColor};
    margin-right: 1rem;
  }
`;
export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  div {
    color: ${({ theme }) => theme.CurrentWeather.textColor};
    display: flex;
    align-items: center;
    font-size: 1rem;
    width: 8rem;
  }
  svg {
    fill: ${({ theme }) => theme.CurrentWeather.textColor};
    margin-right: 1rem;
    width: 1.6rem;
    margin-left: -0.3rem;
  }
  span {
    color: ${({ theme }) => theme.CurrentWeather.textColor};
    font-weight: 500;
    font-size: 1rem;
  }
`;
export const CurrentWeatherOverview = styled.div`
  background-color: ${({ theme }) =>
    theme.CurrentWeather.cityNameContainer.containerBgColor};
  color: ${({ theme }) => theme.CurrentWeather.cityNameContainer.textColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0.5rem;
  }
  p {
    text-transform: uppercase;
  }
`;
