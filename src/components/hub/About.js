import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import HiroshiIcon from "../../assets/icons/hiroshi.svg";
import JsIcon from "../../assets/icons/js.svg";
import AiIcon from "../../assets/icons/ai.svg";
import ChainIcon from "../../assets/icons/chain.svg";
import PerspectiveIcon from "../../assets/icons/cube.svg";
import HackIcon from "../../assets/icons/hack.svg";
import CombatIcon from "../../assets/icons/combat.svg";

const StyledPersonInfo = styled.div`
  z-index: 10;
  position: absolute;
  top: 4vh;
  right: 5vh;
  width: 330px;
  transform: perspective(1000px)
    rotateZ(${(props) => props.rotationY || "0deg"})
    rotateY(${(props) => props.rotationX || "0deg"});
`;

const StyledTop = styled.div`
  position: relative;
  height: 40px;
  width: 164px;
  border-left: 2px solid #48d1d3;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-top: 8px;
  padding-left: 15px;

  &:after,
  &:before {
    position: absolute;
    content: "";
    width: calc(100% - 2px);
    left: 0px;
    z-index: -1;
  }

  &:before {
    height: 30%;
    top: 0px;
    border: 2px solid #48d1d3;
    border-width: 2px 3px 0px 0px;
    transform: skew(45deg);
    transform-origin: right bottom;
  }

  &:after {
    height: 70%;
    bottom: 0px;
    border: 2px solid #48d1d3;
    border-width: 0px 2px 0px 0px;
  }

  h4 {
    font-size: 18px;
  }
`;

const StyledMain = styled.div`
  border-left: 2px solid #48d1d3;
  border-bottom: 2px solid #48d1d3;
  border-right: 2px solid #48d1d3;
  height: max-content;
`;

const StyledHalfLine = styled.div`
  margin-left: 49.3%;
  height: 2px;
  width: 51%;
  background-color: #48d1d3;
`;

const StyledHiroshiLogo = styled.img`
  margin-top: 5px;
`;

const StyledContent = styled.div`
  padding: 20px;

  h4 {
    margin: 7px 0;
    font-size: 20px;
  }

  span {
    opacity: 0.1;
    color: white;
    font-size: 20px;
  }
`;

const StyledItemsWrapper = styled.div`
  display: flex;
`;

const StyledItems = styled.div`
  width: max-content;
  margin: 10px 15px 10px 0;

  p {
    margin-top: 8px;
  }

  img {
    height: 42px;
    width: 42px;
  }
`;

const StyledExperience = styled.div`
  margin: 10px 0;
  display: flex;
`;

const StyledLineBreak = styled.div`
  width: 1px;
  height: 55px;
  background: linear-gradient(180deg, #2297be 0%, #48d1d3 48.02%, #2297be 100%);
  margin: 0 8px;
`;

const StyledExperienceInside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledAbout = styled.div`
  margin: 10px 0;

  p {
    font-size: 12px;
    margin: 12px 0;
  }
`;

const StyledLink = styled.a`
  opacity: 0.1;
`;

const Portfolio = () => {
  const { t } = useTranslation();
  const [rotationX, setRotationX] = useState("0deg");
  const [rotationY, setRotationY] = useState("0deg");

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const rotationXWindow = (x / width) * 15 - 10;
      const rotationYWindow = ((y / height) * 2 - 1) * -1;
      setRotationX(rotationXWindow);
      setRotationY(rotationYWindow);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <StyledPersonInfo
        rotationX={`${rotationX}deg`}
        rotationY={`${rotationY}deg`}
      >
        <StyledTop>
          <h4 className="font_main">{t("about.scan")}</h4>
        </StyledTop>
        <StyledMain>
          <StyledHalfLine />
          <StyledContent>
            <h5 className="font_red">{t("about.classification")}</h5>
            <h4 className="font_green">
              {t("about.programmer")} <span> | {t("about.netrunner")} </span>
            </h4>
            <h5 className="font_red">{t("about.name")}</h5>
            <h4 className="font_main">Damian Szmurło</h4>
            <h5 className="font_red">{t("about.skill")}</h5>
            <StyledItemsWrapper>
              <StyledItems>
                <img src={JsIcon} alt="js icon" />
                <p className="font_main"> JavaScript</p>
              </StyledItems>
              <StyledItems>
                <img src={AiIcon} alt="ai icon" />
                <p
                  className="font_main"
                  style={{ fontSize: "7px", marginTop: "11px" }}
                >
                  Artificial intelligence
                </p>
              </StyledItems>
              <StyledItems>
                <img src={ChainIcon} alt="blockchain icon" />
                <p className="font_main">Blockchain</p>
              </StyledItems>
              <StyledItems>
                <img src={PerspectiveIcon} alt="3d icon" />
                <p className="font_main">3D</p>
              </StyledItems>
            </StyledItemsWrapper>
            <h5 className="font_red">{t("about.experience")}</h5>
            <StyledExperience>
              <StyledExperienceInside>
                <h5 className="font_main"> 2018 - 22</h5>
                <h5 className="font_main"> 2018 - 23</h5>
                <h5 className="font_main"> 2023 - now</h5>
              </StyledExperienceInside>
              <StyledLineBreak />
              <StyledExperienceInside>
                <h5 className="font_main"> Front end developer</h5>
                <h5 className="font_main"> Full stack developer</h5>
                <h5 className="font_main"> Web3 developer</h5>
              </StyledExperienceInside>
            </StyledExperience>
            <h5 className="font_red">{t("about.info")}</h5>
            <StyledAbout>
              <p className="font_main"> {t("about.about.quality")}</p>
              <p className="font_main"> {t("about.about.experience")}</p>
              <p className="font_main"> {t("about.about.skill")}</p>
            </StyledAbout>
            <h5 className="font_red">{t("about.abilities")}</h5>
            <StyledItemsWrapper>
              <StyledItems>
                <img src={CombatIcon} alt="combat icon" />
                <p className="font_main"> Combat</p>
              </StyledItems>
              <StyledItems>
                <img src={HackIcon} alt="hack icon" />
                <p className="font_main"> Hacking</p>
              </StyledItems>
            </StyledItemsWrapper>
          </StyledContent>
        </StyledMain>
        <StyledHiroshiLogo src={HiroshiIcon} alt="Optical logo" />
        <StyledLink 
                href="https://dswebsite.webflow.io/" 
              >
                dswebsite.webflow.io
        </StyledLink>
      </StyledPersonInfo>
    </>
  );
};

export default Portfolio;
