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
  background-color: #4ef9fe05;
  border-top: 1px solid #4ef9fe20;
  border-bottom: 1px solid #4ef9fe20;

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

const Porfolio = ({ setNav }) => {

  return (
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
  );
};

export default Porfolio;
