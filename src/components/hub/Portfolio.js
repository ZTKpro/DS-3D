import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { portfolioFilter, portfolio } from "../../data/portfolio";

const StyledPorfolio = styled.div`
  transform: perspective(1000px)
    rotateX(${(props) => props.rotationY || "1deg"})
    rotateY(${(props) => props.rotationX || "1deg"});
  position: absolute;
  z-index: 10;
  top: 3vh;
  left: 10vw;
  width: 80vw;
  color: var(--main-color);
`;

const StyledPorfolioNav = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #48d1d3;
  border-bottom: 2px solid
    ${(props) => (props.active ? "transparent" : "#48d1d3")};
  width: 180px;
  border-radius: 1px;
  cursor: pointer;
  font-size: 16px;
`;

const StyledSelectorLine = styled.div`
  border-bottom: 2px solid #48d1d3;
  width: 100%;
`;

const StyledPorfolioWrapper = styled.div`
  min-height: 82vh;
  max-height: 82vh;
  min-width: 80vw;
  max-width: max-content;
  overflow-y: auto;
  padding: 20px;
  border: 2px solid var(--main-color);
  border-top: none;
  border-radius: 2px;

  a {
    height: max-content;
    width: max-content;
    position: relative;
  }
`;

const StyledPorfolioInside = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledPorfolioItem = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid #4ef9fe80;
  box-sizing: border-box;
  width: 270px;
  height: 180px;
  overflow: hidden;
  clip-path: polygon(0% 0%, 100% 0, 100% 75%, 85% 100%, 0% 100%);

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

const StyledRankingLine = styled.div`
  position: absolute;
  bottom: 24px;
  right: -32px;
  height: 10px;
  width: 48px;
  background-color: ${(props) => `var(${props.color})`};
  transform: rotate(-48deg) translate(-50%, -50%);
  clip-path: polygon(0% 0%, 100% 0, 100% 0%, 78% 100%, 16% 100%);
`;

const StyledTooltip = styled.div`
  position: absolute;
  border: 1px solid red;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left - 140}px`};
  width: 235px;
  height: min-content;
  border: 1px solid var(--main-color);
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.show ? "block" : "none")};
`;

const StyledTooltipLabel = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${(props) => `var(${props.color})`};
`;

const StyledTooltipMain = styled.div`
  padding: 10px;

  h4 {
    font-size: 16px;
    margin: 5px 0;
  }
`;

const Porfolio = ({ setRouter }) => {
  const { t } = useTranslation();

  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);
  const [rotationX, setRotationX] = useState("1deg");
  const [rotationY, setRotationY] = useState("1deg");
  const [tooltipData, setTooltipData] = useState({});

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const rotationXWindow = (x / width) * 0.5 - 0.25;
      const rotationYWindow = ((y / height) * 2 - 1) * -1;
      setRotationX(rotationXWindow);
      setRotationY(rotationYWindow);

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const filteredPortfolioItems = portfolio.filter((item) => {
      if (selectedTag === null) {
        return true;
      } else {
        return item.tags.some((tag) => selectedTag === tag);
      }
    });

    setFilteredPortfolio(filteredPortfolioItems);
  }, [selectedTag]);

  const labelColors = [`--gold-color`, `--purple-color`, `--blue-color`];

  return (
    <StyledPorfolio rotationX={`${rotationX}deg`} rotationY={`${rotationY}deg`}>
      <StyledPorfolioNav>
        <StyledSelector onClick={() => setRouter("")}>Back</StyledSelector>

        {portfolioFilter.map((item) => (
          <StyledSelector
            active={selectedTag === item}
            key={item}
            onClick={() => handleTagClick(item)}
          >
            {item}
          </StyledSelector>
        ))}

        <StyledSelectorLine />
      </StyledPorfolioNav>
      <StyledPorfolioWrapper>
        <StyledPorfolioInside>
          {filteredPortfolio.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={item.url}
              onMouseOver={() => setTooltipData(item)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <StyledPorfolioItem className="active">
                <img src={item.image} alt={item.name} />
              </StyledPorfolioItem>
              <StyledRankingLine color={labelColors[item.label]} />
            </a>
          ))}
        </StyledPorfolioInside>
      </StyledPorfolioWrapper>
      <StyledTooltip
        top={mousePosition.y}
        left={mousePosition.x}
        show={showTooltip}
      >
        <StyledTooltipLabel color={labelColors[tooltipData.label]} />
        <StyledTooltipMain>
          <h5 className="font_red">{t("porfolio.name")}</h5>
          <h4>{t(`${tooltipData.name}.name`)}</h4>
          <h5 className="font_red">{t("porfolio.description")}</h5>
          <h4>{t(`${tooltipData.name}.describe`)}</h4>
        </StyledTooltipMain>
      </StyledTooltip>
    </StyledPorfolio>
  );
};

export default Porfolio;
