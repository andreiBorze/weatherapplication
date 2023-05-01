import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-center;
  height: 5rem;
  background-color: ${({ theme }) => theme.header.backgroundColor};
`;
export const HeaderTitleContainer = styled.h1`
  color: ${({ theme }) => theme.header.titleColor};
  font-size: 2.2rem;
`;
