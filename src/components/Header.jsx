import React from "react";
import styled from "styled-components";

import Logo from "../assets/Logo.svg";

const StyledHeader = styled.header`
  padding: 14px 0 10px;
  text-align: center;
  box-shadow: 0 1px var(--shadow-3);

  @media only screen and (min-width: 480px) {
    box-shadow: 0 8px 24px var(--gray-4);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="Positive YOGA logo" />
    </StyledHeader>
  );
}

export default Header;
