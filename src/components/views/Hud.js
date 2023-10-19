import React, { useContext } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
    font-size: 15px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const Hud = () => {
  const [router, setRouter] = useContext(RouterContext);
  const { t, i18n } = useTranslation();

  const isPl = i18n.language === "pl";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {router === menu.ABOUT && <About />}
      {router === menu.PORTFOLIO && <Porfolio setRouter={setRouter} />}
      {router === menu.CONTACT && <Contact setRouter={setRouter} />}
      {router === menu.DREAMS && <Dreams setRouter={setRouter} />}

      <StyledNav>
        {Object.entries(menu).map(([key, value], index) => (
          <p
            key={value}
            onClick={() =>
              router === value ? setRouter(null) : setRouter(value)
            }
            className="font_main"
          >
            {t(`menu.${value}`)}
          </p>
        ))}

        <p
          className="font_main"
          onClick={() => changeLanguage(isPl ? "en" : "pl")}
        >
          {isPl ? "en" : "pl"}
        </p>
      </StyledNav>
    </>
  );
};

export default Hud;
