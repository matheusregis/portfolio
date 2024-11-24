import styled from "styled-components";

export const AboutSection = styled.section`
  position: relative; 
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1200px; 
  margin: 0 auto;
  overflow: hidden; 
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;

  @media (max-width: 915px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 50%; 
  @media (max-width: 915px) {
    max-width: 100%; 
  }
`;

export const StyledImage = styled.img`
  flex: 1;
  max-width: 40%; 
  margin-top: 40px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  @media (max-width: 915px) {
    max-width: 80%; 
    margin: 20px 0; 
  }
`;

export const ProjectHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 50px 0 20px;
  @media (max-width: 915px) {
    font-size: 1.8rem; 
  }
`;
