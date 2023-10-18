import React, { useContext } from "react";
import styled from "styled-components";

import Porfolio from "../hub/Portfolio";
import About from "../hub/About";
import Contact from "../hub/Contact";
import Dreams from "../hub/Dreams";

import RouterContext from "../../context/Router";
import menu from "../../data/menu";

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

const Hud = () => {
  const [router, setRouter] = useContext(RouterContext);

  return (
    <>
      {router === menu.ABOUT && <About />}
      {router === menu.PORTFOLIO && <Porfolio setRouter={setRouter} />}
      {router === menu.CONTACT && <Contact setRouter={setRouter} />}
      {router === menu.DREAMS && <Dreams setRouter={setRouter} />}

      {router !== menu.PORTFOLIO && (
        <StyledNav>
          {Object.entries(menu).map(([key, value], index) => (
            <p key={value} onClick={() => setRouter(value)}>
              {value}
            </p>
          ))}
        </StyledNav>
      )}
    </>
  );
};

export default Hud;
