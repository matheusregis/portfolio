import styled from "styled-components";

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;

  .purple {
    color: #cd5ff8;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem; 
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem; 
    margin-bottom: 10px;
  }
`;
