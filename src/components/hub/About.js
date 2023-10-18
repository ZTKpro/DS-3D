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

const Porfolio = ({ setRouter }) => {

  return (
    <StyledPersonInfo className="section">
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
