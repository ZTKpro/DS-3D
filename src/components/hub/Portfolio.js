import React from "react";
import styled from "styled-components";

import { portfolioFilter, portfolio } from "../../data/data";

const StyledPorfolio = styled.div`
  position: absolute;
  z-index: 10;
  top: 1vh;
  left: 0.5vw;
  height: 98vh;
  width: 98.5vw;
  background-color: #4ef9fe15;
  border-top: 1px solid #4ef9fe80;
  border-bottom: 1px solid #4ef9fe80;
`;

const StyledPorfolioNav = styled.div`
  height: 50px;
  width: 100%;
  background-color: #4ef9fe15;
  border-top: 1px solid #4ef9fe80;
  border-bottom: 1px solid #4ef9fe80;
  display: flex;
  align-items: center;

  p {
    margin: 0 25px;
    cursor: pointer;
  }
`;

const StyledPorfolioWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

const StyledPorfolioItem = styled.div`
  cursor: pointer;
  background-color: #4ef9fe15;
  padding: 20px;
  border: 1px solid #4ef9fe80;

  p {
    padding: 10px;
  }
`;

const Porfolio = ({ setNav }) => {
  return (
    <StyledPorfolio>
      <StyledPorfolioNav>
        {portfolioFilter.map((item) => (
          <p className="active" key={item}>
            {item}
          </p>
        ))}
      </StyledPorfolioNav>
      <StyledPorfolioWrapper>
        {portfolio.map((item) => (
          <StyledPorfolioItem className="active" key={item.name}>
            <p>{item.name}</p>
            <p>{item.tech}</p>
          </StyledPorfolioItem>
        ))}
      </StyledPorfolioWrapper>
    </StyledPorfolio>
  );
};

export default Porfolio;
