import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 16px; 
  padding: 40px; 
  max-width: 1200px; 
  margin: 0 auto; 

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const IconCard = styled.div`
  position: relative;
  width: 100%; 
  height: 150px; 
  background-color: transparent;
  border: 1px solid rgba(205, 95, 248, 0.6); 
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1); 
    background-color: rgba(205, 95, 248, 0.2); 
    box-shadow: 0px 4px 15px rgba(205, 95, 248, 0.6); 
  }

  svg {
    font-size: 4rem; 
  }
`;

export const IconLabel = styled.div`
  position: absolute;
  bottom: -25px;
  background-color: rgba(0, 0, 0, 0.8); 
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${IconCard}:hover & {
    opacity: 1;
    transform: translateY(0); 
  }
`;
