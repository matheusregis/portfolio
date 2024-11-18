import styled, { keyframes } from "styled-components";
import { Col, Row, Image } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  justify-content: center;
  height: 100%;

  h1 {
    font-size: 2em;
    margin-left: 25%;
  }

  p {
    font-size: 1.25em;
    margin-left: 25%;
  }

  @media (max-width: 768px) {
    padding: 16px;
    h1 {
      font-size: 1.5em;
      margin-left: 0; 
      text-align: center;
    }

    p {
      font-size: 1em;
      margin-left: 0;
      text-align: center;
    }
  }
`;

export const RowAntd = styled(Row)`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; 

  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const ColAntd = styled(Col)`
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 16px; 
  }
`;

export const ImageAntd = styled(Image)`
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  animation: bounce 1s infinite;

  svg {
    font-size: 4rem; /* Ajusta o tamanho do ícone */
  }

  @media (max-width: 768px) {
    svg {
      font-size: 3rem; /* Reduz o tamanho do ícone em telas menores */
    }
  }
`;

export const bounceDown = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const bounceUp = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(5px);
  }
`;

export const BounceButton = styled.button<{ isExpanded: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  animation: ${({ isExpanded }) =>
    isExpanded ? bounceUp : bounceDown} 1s infinite;

  svg {
    font-size: 100px;
    color: #fff;
  }

  @media (max-width: 768px) {
    svg {
      font-size: 70px; 
    }
  }
`;
