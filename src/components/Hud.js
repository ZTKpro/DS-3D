import React from "react";
import styled, { keyframes } from "styled-components";

const animatedBorder = keyframes`
    0% {
        border-image: linear-gradient(to right, rgba(78, 249, 254, 0.5), rgba(6, 150, 255, 0.5)) 1;
    }
    50% {
        border-image: linear-gradient(to left, rgba(78, 249, 254, 0.5), rgba(6, 150, 255, 0.5)) 1;
    }
     100% {
        border-image: linear-gradient(to right, rgba(78, 249, 254, 0.5), rgba(6, 150, 255, 0.5)) 1;
    }
`;

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

  &:hover {
    opacity: 0.9;
  }
`;

const StyledPersonInfo = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 2.5vh;
  right: 2.5vh;
  height: 95vh;
  width: 300px;
  padding: 40px;
  background-color: #4ef9fe05;
  border-top: 1px solid #4ef9fe20;
  border-bottom: 1px solid #4ef9fe20;

  animation: ${animatedBorder}10s linear infinite;

  p {
    color: #4ef9fe;
    font-family: "Orbitron", sans-serif;
    font-size: 0.8rem;
    text-shadow: -1px -1px #4ef9fe;
    margin-bottom: 1rem;
    line-height: 2rem;
    text-transform: uppercase;
  }
`;

const Hud = ({ setNav }) => {
  return (
    <StyledDiv>
      <StyledPersonInfo>
        <h2>Personal Information</h2>
        <p>
          <strong>Name:</strong> Damian
        </p>
        <p>
          <strong>Age:</strong> 28
        </p>
        <p>
          <strong>Location:</strong> Warsaw, Poland
        </p>
        <p>Skills</p>
        sth
        <p>Interests</p>
        sth
      </StyledPersonInfo>

      <StyledP onClick={() => setNav("ABOUT")}> About </StyledP>
      <StyledP onClick={() => setNav("PORTFOLIO")}> Portfolio </StyledP>
      <StyledP onClick={() => setNav("CONTACT")}> Contact </StyledP>
      <StyledP onClick={() => setNav("DREAMS")}> Dreams </StyledP>
    </StyledDiv>
  );
};

export default Hud;
