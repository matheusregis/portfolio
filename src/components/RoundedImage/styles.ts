import styled from "styled-components";

export const StyledImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
  max-width: ${(props) => props.width || "100%"};
  max-height: ${(props) => props.height || "auto"};
  object-fit: cover;
  max-width: 400px;
  margin: 0 auto;
`;
