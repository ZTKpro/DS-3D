import React from "react";
import styled from "styled-components";

const StyledPersonInfo = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 2.5vh;
  right: 2.5vh;
  height: 95vh;
  width: 300px;
  padding: 40px;

  p {
    color: #4ef9fe;
    font-family: "Orbitron", sans-serif;
    font-size: 0.8rem;
  }
`;

const Dreams = ({ setRouter }) => {
  return (
    <StyledPersonInfo className="section">
      <h2>Dreams</h2>
    </StyledPersonInfo>
  );
};

export default Dreams;
