import React from "react";
import styled from "styled-components";

import Prof from "../../assets/prof.jpeg";

const StyledPersonInfo = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  position: absolute;
  width: 70%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledImgWrapper = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
  img {
    height: auto;
    width: 100%;
  }
  opacity: 0.8;
`;
const StyledTextWrapper = styled.div`
  width: 50%;
  padding: 40px 20px;

  h2 {
    font-size: 32px;
    font-weight: bold;
  }
  h4 {
    font-size: 20px;
  }
  p {
    margin-top: 10px;
  }
`;

const Contact = ({ setNav }) => {
  return (
    <StyledPersonInfo className="section">
      <StyledImgWrapper>
        <img src={Prof} alt="Damian full stack developer" />
      </StyledImgWrapper>
      <StyledTextWrapper>
        <h2>Odzwiedz moje social media</h2>
        <h4>Lub napisz email</h4>
        <a href="mailto:damianszmurlowork@gmail.com" className="active">
          <p>damianszmurlowork@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/dszmurlo/" className="active">
          <p>linkedin.com/in/dszmurlo/</p>
        </a>
        <a href="https://www.linkedin.com/in/dszmurlo/" className="active">
          <p> github.com/ZTKpro</p>
        </a>
      </StyledTextWrapper>
    </StyledPersonInfo>
  );
};

export default Contact;
