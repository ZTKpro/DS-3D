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
  overflow-x: auto;

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
`;

const StyledPorfolioItem = styled.div`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #4ef9fe80;
  width: 450px;
  box-sizing: border-box;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  p,
  h2 {
    padding: 10px;
  }

  h2{
    font-size: 18px;
  }
`;

const StyledTags = styled.div`
  display: flex;
`;
const StyledTagsSelect = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  margin-right: 10px;
  height: 28px;
  background-color: #00000050;
`;

const Porfolio = ({ setNav }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    const filteredPortfolioItems = portfolio
      .filter((item) => {
        if (selectedTags.length === 0) {
          return true;
        } else {
          return item.tags.some((tag) => selectedTags.includes(tag));
        }
      })
      .filter((item) => {
        if (!searchText) {
          return true;
        } else {
          const nameMatches = item.name
            .toLowerCase()
            .includes(searchText.toLowerCase());
          const describeMatches = item.describe
            .toLowerCase()
            .includes(searchText.toLowerCase());
          return nameMatches || describeMatches;
        }
      });

    setFilteredPortfolio(filteredPortfolioItems);
  }, [selectedTags, searchText]);

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
        <StyledInput
          className="active"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
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
