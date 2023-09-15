import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { portfolioFilter, portfolio } from "../../data/data";

const StyledPorfolio = styled.div`
  position: absolute;
  z-index: 10;
  top: 1vh;
  left: 0.5vw;
  height: 98vh;
  width: 98.5vw;
  display: flex;
  flex-direction: column;
`;

const StyledPorfolioNav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;

  p {
    margin: 0 25px;
    cursor: pointer;
  }

  input {
    margin-left: auto;
    padding: 5px;
  }
`;

const StyledPorfolioWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 90.5vh;
  overflow-y: auto;
  padding: 20px;
  justify-content: space-between;
`;

const StyledPorfolioItem = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #4ef9fe80;
  width: calc(33.33% - 20px);
  box-sizing: border-box;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  p {
    padding: 10px;
  }
`;

const StyledTags = styled.div`
  display: flex;
`;
const StyledTagsSelect = styled.div`
  display: flex;
`;

const Porfolio = ({ setNav }) => {
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);
  const [selectedTags, setSelectedTags] = useState([]);
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

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
    <StyledPorfolio className="section">
      <StyledPorfolioNav className="section">
        <StyledTagsSelect>
          <p className="active" onClick={() => setNav("")}>
            Back
          </p>

          {portfolioFilter.map((item) => (
            <p
              className={
                selectedTags.includes(item) ? "active selected" : "active"
              }
              key={item}
              onClick={() => handleTagClick(item)}
            >
              {item}
            </p>
          ))}
        </StyledTagsSelect>
        <input placeholder="Search..." />
      </StyledPorfolioNav>
      <StyledPorfolioWrapper>
        {filteredPortfolio.map((item) => (
          <StyledPorfolioItem className="active" key={item.name}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.describe}</p>
            <StyledTags>
              {item.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </StyledTags>
          </StyledPorfolioItem>
        ))}
      </StyledPorfolioWrapper>
    </StyledPorfolio>
  );
};

export default Porfolio;
