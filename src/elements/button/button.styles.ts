import styled from "styled-components";

export const ButtonWrapper = styled.div<{ isPrimary: boolean }>`
  background-color: ${(props) => (props.isPrimary ? "orange" : "white")};
`;
