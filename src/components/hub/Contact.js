import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Prof from "../../assets/prof.jpeg";

import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";
import githubIcon from "../../assets/icons/github.svg";

const StyledContact = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  position: absolute;
  width: 463px;
  height: max-content;
  border-bottom: 2px solid var(--main-color);
`;

const StyledTop = styled.div`
  height: 30px;
  width: 100%;
  background-color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 15px 15px;
  -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 60%, 98% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0, 100% 60%, 98% 100%, 0% 100%);
  p {
    font-weight: bold;
    font-size: 16px;
  }
`;

const StyledMain = styled.div`
  margin: 12px 0;
  width: 98%;
  display: flex;
`;

const StyledImg = styled.div`
  width: 153px;
  height: 180px;
  margin-right: 12px;
  opacity: 0.8;
  overflow: hidden;

  img {
    height: 130%;
    width: 130%;
  }
`;

const StyledSocialLinks = styled.a`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  &:hover {
    p {
      color: black;
      background-color: var(--main-color);
    }
  }
`;

const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledSocial = styled.p`
  margin-left: 5px;
  padding: 3px 5px;
  font-size: 14px;
  width: 261px;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledContact>
      <StyledTop>
        <p>{t("contact")}</p>
      </StyledTop>
      <StyledMain>
        <StyledImg>
          <img src={Prof} alt="profile img" />
        </StyledImg>
        <div>
          <StyledSocialLinks href="sth">
            <StyledIcon src={linkedinIcon} />
            <StyledSocial className="font_main">Linkedin</StyledSocial>
          </StyledSocialLinks>
          <StyledSocialLinks href="sth">
            <StyledIcon src={emailIcon} />
            <StyledSocial className="font_main">Email</StyledSocial>
          </StyledSocialLinks>
          <StyledSocialLinks href="sth">
            <StyledIcon src={githubIcon} />
            <StyledSocial className="font_main">Github</StyledSocial>
          </StyledSocialLinks>
        </div>
      </StyledMain>
    </StyledContact>
  );
};

export default Contact;
