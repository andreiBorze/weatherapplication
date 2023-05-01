import React from "react";
import {
  HeaderContainer,
  HeaderTitleContainer,
} from "./HeaderStyle";

const Header: React.FC<{ titleHeader: string }> = (props) => {
  const { titleHeader } = props;

  return (
    <HeaderContainer>
      <HeaderTitleContainer>{titleHeader}</HeaderTitleContainer>
    </HeaderContainer>
  );
};

export default Header;
