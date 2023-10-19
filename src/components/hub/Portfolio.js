import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { portfolioFilter, portfolio } from "../../data/portfolio";

const StyledPorfolio = styled.div`
  transform: translate(-50%, -50%) perspective(1000px)
    rotateX(${(props) => props.rotationY || "1deg"})
    rotateY(${(props) => props.rotationX || "1deg"});
  position: absolute;
  z-index: 10;
  top: 46.5%;
  left: 50%;
  color: var(--main-color);
`;

const StyledPorfolioNav = styled.div`
  height: 50px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 80vh;
  max-height: 80vh;
  min-width: 80vw;
  max-width: max-content;
  overflow-y: auto;
  padding: 20px;
  border: 2px solid var(--main-color);
  border-top: none;
  border-radius: 2px;
`;

const StyledPorfolioItem = styled.div`
  cursor: pointer;
  border: 1px solid #4ef9fe80;
  box-sizing: border-box;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  p,
  h2 {
    padding: 10px;
  }

  h2 {
    font-size: 18px;
  }
`;

const StyledTags = styled.div`
  display: flex;
`;

const Porfolio = ({ setRouter }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);
  const [rotationX, setRotationX] = useState("1deg");
  const [rotationY, setRotationY] = useState("1deg");

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
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
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const filteredPortfolioItems = portfolio.filter((item) => {
      if (selectedTags.length === 0) {
        return true;
      } else {
        return item.tags.some((tag) => selectedTags.includes(tag));
      }
    });

    setFilteredPortfolio(filteredPortfolioItems);
  }, [selectedTags]);

  return (
    <StyledPorfolio rotationX={`${rotationX}deg`} rotationY={`${rotationY}deg`}>
      <StyledPorfolioNav>
        <StyledSelector active={true} onClick={() => setRouter("")}>
          Back
        </StyledSelector>

        {portfolioFilter.map((item) => (
          <StyledSelector
            active={selectedTags.includes(item)}
            key={item}
            onClick={() => handleTagClick(item)}
          >
            {item}
          </StyledSelector>
        ))}

        <StyledSelectorLine />
      </StyledPorfolioNav>
      <StyledPorfolioWrapper>
        {filteredPortfolio.map((item) => (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
          >
            <StyledPorfolioItem className="active">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.describe}</p>
              <StyledTags>
                {item.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </StyledTags>
            </StyledPorfolioItem>
          </a>
        ))}
      </StyledPorfolioWrapper>
    </StyledPorfolio>
  );
};

export default Porfolio;
