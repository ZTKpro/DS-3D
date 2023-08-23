import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  color: #0696ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledP = styled.p`
  margin: 0px 10px;
  cursor: pointer;
  background-image: linear-gradient(#4ef9fe, #0696ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    opacity: 0.9;
  }
`;

const Hud = ({ setNav }) => {
  return (
    <StyledDiv>
      <StyledP onClick={() => setNav("ABOUT")}> About </StyledP>
      <StyledP onClick={() => setNav("PORTFOLIO")}> Portfolio </StyledP>
      <StyledP onClick={() => setNav("CONTACT")}> Contact </StyledP>
      <StyledP onClick={() => setNav("DREAMS")}> Dreams </StyledP>
    </StyledDiv>
  );
};

export default Hud;
