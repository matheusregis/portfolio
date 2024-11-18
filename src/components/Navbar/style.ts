import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const gradientAnimation = keyframes`
  0% {
    color: white;
  }
  100% {
    color: #cd5ff8;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: color 0.5s ease;

  &:hover {
    animation: ${gradientAnimation} 1s forwards;
  }

  &:hover span {
    animation: ${gradientAnimation} 0.5s forwards 0.5s;
  }

  @media (max-width: 768px) {
    font-size: 1rem; 
    text-align: center; 
  }
`;

export const FlagButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  img {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 768px) {
    img {
      width: 24px; 
      height: 24px;
    }
  }
`;

export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 1rem;

  @media (max-width: 800px) {
    display: block;
  }
`;

export const MenuWrapper = styled.div<{ isMenuOpen: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  }
`;