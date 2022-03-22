import styled, { css } from "styled-components";

const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border-radius: 8px;
  font-family: SFProTextBold, sans-serif;
  font-size: 1rem;
  border: none;
  padding: 16px;
  text-shadow: 0 4px 8px var(--shadow-2);
  box-shadow: 0 16px 32px var(--shadow-1);
  width: 100%;
  display: block;
  margin: 0 auto;

  @media only screen and (min-width: 480px) {
    width: 340px;
  }

  ${(props) =>
    props.full &&
    css`
      @media only screen and (min-width: 480px) {
        width: 100%;
      }
    `}
`;

export default Button;
