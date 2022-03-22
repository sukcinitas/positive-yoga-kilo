import styled, { css } from "styled-components";

export const Details = styled.p`
  color: var(--gray-1);
  font-family: SFProTextRegular, sans-serif;
  font-size: 12px;
  line-height: 18px;

  ${(props) =>
    props.dull &&
    css`
      opacity: 0.64;
    `}

  ${(props) =>
    props.medium &&
    css`
      font-size: 14px;
    `}

    ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  & a {
    color: var(--bright-2);
    text-decoration: none;
  }
`;

export const Accent = styled.span`
  ${(props) =>
    props.bold &&
    css`
      font-family: SFProTextBold, sans-serif;
    `}

  ${(props) =>
    props.primary &&
    css`
      color: var(--primary);
    `}

  ${(props) =>
    props.strikedthrough &&
    css`
      text-decoration: line-through;
      margin-right: 8px;
    `}

    ${(props) =>
    props.big &&
    css`
      font-size: 24px;
    `}
`;
