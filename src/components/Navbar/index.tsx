import React, { useState } from "react";
import { NavLink, NavbarWrapper, FlagButton, ToggleButton, MenuWrapper } from "./style";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import usFlag from "../../assets/flags/us.png";
import brFlag from "../../assets/flags/br.png";

const Navbar: React.FC = () => {
  const {
    i18n: { changeLanguage, language },
    t,
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para colapsar menu

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarWrapper>
      <ToggleButton onClick={toggleMenu}>
        ☰
      </ToggleButton>
      <MenuWrapper isMenuOpen={isMenuOpen}>
        <NavLink to="/" data-hover="Home">
          <AiOutlineHome style={{ marginBottom: "-2px" }} /> {t("home")}
        </NavLink>
        <NavLink to="/about" data-hover="About">
          <AiOutlineUser style={{ marginBottom: "-2px" }} /> {t("about")}
        </NavLink>
        <NavLink to="/experiences" data-hover="Experiences">
          <AiOutlineFundProjectionScreen style={{ marginBottom: "-2px" }} />{" "}
          {t("experiences")}
        </NavLink>
        <NavLink to="/resume" data-hover="Resume">
          <CgFileDocument style={{ marginBottom: "-2px" }} /> {t("resume")}
        </NavLink>
        <FlagButton onClick={handleChangeLanguage}>
          {currentLanguage === "en" ? (
            <img src={usFlag} alt="English" />
          ) : (
            <img src={brFlag} alt="Portuguese" />
          )}
        </FlagButton>
      </MenuWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
