import React from "react";
import { ActiveButton, ButtonContainer, ButtonsContainer } from "./styled";


const MethodButtons = ({
  selectedMethod,
  setSelectedMethod,
}: {
  selectedMethod: string;
  setSelectedMethod: Function;
}) => {
  return (
    <ButtonsContainer>
      {selectedMethod === "Global News" ? (
        <ActiveButton onClick={() => setSelectedMethod("Global News")}>
          Global News
        </ActiveButton>
      ) : (
        <ButtonContainer onClick={() => setSelectedMethod("Global News")}>
          Global News
        </ButtonContainer>
      )}
      {selectedMethod === "Top News" ? (
        <ActiveButton onClick={() => setSelectedMethod("Top News")}>
          Top News
        </ActiveButton>
      ) : (
        <ButtonContainer onClick={() => setSelectedMethod("Top News")}>
          Top News
        </ButtonContainer>
      )}
    </ButtonsContainer>
  );
};

export default MethodButtons;
