import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import HiroshiIcon from "../../assets/icons/hiroshi.svg";

const StyledPersonInfo = styled.div`
  z-index: 10;
  position: absolute;
  top: 8vh;
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
  height: 500px;
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

  h5 {
    color: #d24946;
  }

  span {
    opacity: 0.1;
    color: white;
    font-size: 20px;
  }
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
      const rotationXWindow = (x / width) * 20 - 15;
      const rotationYWindow = ((y / height) * 4 - 2) * -1;
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
          <h4>{t("about.scan")}</h4>
        </StyledTop>
        <StyledMain>
          <StyledHalfLine />
          <StyledContent>
            <h5 className="font_red">{t("about.classification")}</h5>
            <h4 className="font_green">
              {t("about.programmer")} <span> | {t("about.netrunner")} </span>
            </h4>
          </StyledContent>
        </StyledMain>
        <StyledHiroshiLogo src={HiroshiIcon} alt="Optical logo" />
      </StyledPersonInfo>
    </>
  );
};

export default Portfolio;
