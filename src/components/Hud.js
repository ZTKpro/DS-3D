import React from "react";
import styled from "styled-components";

import { menu } from "../data/data";

import Porfolio from "./hub/Portfolio";
import About from "./hub/About";
import Contact from "./hub/Contact";
import Dreams from "./hub/Dreams";

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
      {router === menu.PORTFOLIO && <Porfolio setNav={setNav} />}
      {router === menu.CONTACT && <Contact setNav={setNav} />}
      {router === menu.DREAMS && <Dreams setNav={setNav} />}

      {router !== menu.PORTFOLIO && (
        <StyledNav>
          {Object.entries(menu).map(([key, value], index) => (
            <p key={value} onClick={() => setNav(value)}>
              {value}
            </p>
          ))}
        </StyledNav>
      )}
    </>
  );
};

export default Hud;
