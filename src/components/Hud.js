import React from "react";
import styled from "styled-components";

import Porfolio from "./hub/Portfolio";
import About from "./hub/About";
import { menu } from "../data/data";

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
  text-transform: uppercase;
  p {
    margin: 0px 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const Hud = ({ setNav, router }) => {
  return (
    <>
      {router === menu.ABOUT && <About />}
      {router === menu.PORTFOLIO && <Porfolio />}

      <StyledNav>
        {Object.entries(menu).map(([key, value], index) => (
          <p key={index} onClick={() => setNav(value)}>
            {value}
          </p>
        ))}
      </StyledNav>
    </>
  );
};

export default Hud;
