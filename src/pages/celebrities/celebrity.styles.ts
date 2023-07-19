import styled, { css } from "styled-components";

export const ListWrapper = styled.ul``;

export const PageWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const UserHeading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;

export const SearchWrapper = styled.div`
  .input-wrapper {
    border: 1px solid ${(props) => props.theme.COLOR_PALETTE.LIGHT_GRAY};
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    margin: 2rem 0 1rem;
    padding: 0 1rem;
  }

  input {
    width: 100%;
    border: none;

    &::placeholder {
      color: ${(props) => props.theme.COLOR_PALETTE.GRAY};
    }

    &:focus {
      border: none;
    }
  }
`;

export const CelebrityWrapper = styled.li``;

export const AccordionHeadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AccordionBodyWrapper = styled.div``;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  display: inline-block;
`;

export const UserName = styled.span`
  display: inline-block;
  font-size: 1.2rem;
`;

export const Picture = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Age = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Gender = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Country = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.span`
  color: ${(props) => props.theme.COLOR_PALETTE.GRAY};
  margin-bottom: 0.5rem;
  display: block;
`;

export const FieldValue = styled.span`
  letter-spacing: 0.1px;
  line-height: 1.3rem;
  display: inline-block;
`;

export const ActionButton = styled.div``;

export const DescriptionWrapper = styled.div``;

export const Description = styled.label``;

export const IconWrapper = styled.div``;
