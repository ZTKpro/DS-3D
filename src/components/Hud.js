import React from "react";
import styled, { keyframes } from "styled-components";

const StyledNav = styled.nav`
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
  p {
    margin: 0px 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
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

const Hud = ({ setNav, router }) => {
  const dataPorfolio = [
    {
      name: "Hudson",
      tech: "Js",
    },
    {
      name: "John",
      tech: "Python",
    },
    {
      name: "Jane",
      tech: "React",
    },
  ];

  const dataPorfolioFilters = ["Back", "AI", "Blockchain", "3D"];

  return (
    <>
      {router === "PORFOLIO" && (
        <StyledPorfolio>
          <StyledPorfolioNav>
            {dataPorfolioFilters.map((item) => (
              <p className="active" key={item}>
                {item}
              </p>
            ))}
          </StyledPorfolioNav>
          <StyledPorfolioWrapper>
            {dataPorfolio.map((item) => (
              <StyledPorfolioItem className="active" key={item.name}>
                <p>{item.name}</p>
                <p>{item.tech}</p>
              </StyledPorfolioItem>
            ))}
          </StyledPorfolioWrapper>
        </StyledPorfolio>
      )}

      {router === "ABOUT" && (
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
      )}
      <StyledNav>
        <p onClick={() => setNav("ABOUT")}> About </p>
        <p onClick={() => setNav("PORTFOLIO")}> Portfolio </p>
        <p onClick={() => setNav("CONTACT")}> Contact </p>
        <p onClick={() => setNav("DREAMS")}> Dreams </p>
        <p onClick={() => setNav("DREAMS")}> Pl </p>
      </StyledNav>
    </>
  );
};

export default Hud;
