import styled from "styled-components";

export const ForecastContainer = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.Forecast.containerBgColor};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  overflow: hidden;
`;
export const SectionTitle = styled.h6`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.Forecast.textColor};
  margin-top: 0.6rem;
  margin-bottom: 2.4rem;
`;
export const ForecastItems = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;

  > :last-child {
    margin-right: 2;
  }
`;
export const ForecastItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.8rem;
  h6 {
    font-weight: 600;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.Forecast.textColor};
    text-align: center;
  }
  span {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.Forecast.textColor};
    width: 5rem;
    text-align: center;
  }
`;
