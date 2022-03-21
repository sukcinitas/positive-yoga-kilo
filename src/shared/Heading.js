import styled, { css } from "styled-components";

export const Heading = styled.h2`
  color: var(--dark-1);
  font-family: SFProDisplayBold, sans-serif;
  font-size: 24px;

  @media only screen and (min-width: 480px) {
    font-size: 32px;
    text-align: center;
  }

  & span {
    color: var(--primary);
  }
`;

export const LargeHeading = styled(Heading).attrs({
  as: "h1",
})`
  font-size: 28px;
  font-weight: 800;
  color: var(--black);

  @media only screen and (min-width: 480px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const SmallHeading = styled(Heading).attrs({
  as: "h3",
})`
  font-size: 20px;
  margin: 24px 0;
  text-align: left;

  @media only screen and (min-width: 480px) {
    font-size: 24px;
  }
`;

export const SmallestHeading = styled(Heading).attrs({
  as: "h4",
})`
  font-size: 15px;
  font-family: SFProTextSemibold, sans-serif;
  text-align: left;
  margin: 4px 0;

  @media only screen and (min-width: 480px) {
    font-size: 16px;
  }
`;

export const SmallCenteredHeading = styled(SmallHeading)`
  @media only screen and (min-width: 480px) {
    text-align: center;
  }
`;
