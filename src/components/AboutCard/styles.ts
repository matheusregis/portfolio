import styled from "styled-components";
import { Card } from "antd";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  @media (max-width: 915px) {
    margin-top: 80px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 915px) {
    margin-bottom: 60px; 
  }
`;

export const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: white;

  span {
    color: #cd5ff8; 
  }

  @media (max-width: 915px) {
    font-size: 2rem; 
  }
`;

export const StyledCard = styled(Card)`
  background: rgba(73,14,84, 0.1);
  border-radius: 10px;
  color: white;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 915px) {
    padding: 16px; 
    margin-bottom: 40px; 
  }
`;

export const ImageWrapper = styled.div`
  max-width: 300px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px; 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 915px) {
    margin-bottom: 40px; 
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: justify;

  span {
    color: #cd5ff8; 
  }

  @media (max-width: 915px) {
    font-size: 0.9rem; 
  }
`;

export const ListItem = styled.li`
  margin: 5px 0;
  list-style: none;
  font-size: 1rem;

  svg {
    color: #cd5ff8; 
    margin-right: 5px;
  }

  @media (max-width: 915px) {
    font-size: 0.9rem;
  }
`;

export const QuoteText = styled.blockquote`
  font-size: 1.2rem;
  margin-top: 20px;
  color: #cd5ff8;
  text-align: center;

  @media (max-width: 915px) {
    font-size: 1rem; 
  }
`;

export const FooterText = styled.footer`
  font-size: 0.9rem;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 915px) {
    font-size: 0.8rem; 
  }
`;
