import styled from "styled-components";

export const AccordionHead = styled.div`
  cursor: pointer;
`;

export const TitleComponent = styled.div<{ isOpen: boolean }>`
  border: ${(props) =>
    props.isOpen
      ? "none"
      : `1px solid ${props.theme.COLOR_PALETTE.LIGHT_GRAY}`};
  padding: 1rem;
  display: flex;
  border-radius: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const IconComponent = styled.span``;

export const AccordionBody = styled.div`
  padding: 1rem;
`;

export const AccordionWrapper = styled.div<{ isOpen: boolean }>`
  border: ${(props) =>
    !props.isOpen
      ? "none"
      : `1px solid ${props.theme.COLOR_PALETTE.LIGHT_GRAY}`};
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;
