import React from "react";
import { FooterContainer } from "./styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Developed By{" "}
        <a href="https://www.linkedin.com/in/borze-andrei-8121a41ba">
          Borze Andrei
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
