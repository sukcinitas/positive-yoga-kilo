import styled, { css } from "styled-components";

const Text = styled.p`
  color: var(--dark-1);
  font-family: SFProTextRegular, sans-serif;
  font-size: 16px;
  line-height: 1.5;

  & span {
    font-family: SFProTextBold, sans-serif;
  }
`;

export default Text;
