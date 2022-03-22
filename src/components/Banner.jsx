import React from "react";
import styled from "styled-components";

import { Details, Accent } from "../shared/Details";
import { StyledLocalOfferIcon } from "../shared/MaterialIcons";

const StyledBanner = styled.div`
  background-color: var(--bright-2);
  display: flex;
  align-items: center;
  column-gap: 18px;
  padding: 18px;

  @media only screen and (min-width: 480px) {
    justify-content: center;
  }
`;

const BannerDetails = styled(Details)`
  color: var(--white);
  font-size: 15px;
`;

function Banner() {
  return (
    <StyledBanner>
      <StyledLocalOfferIcon />
      <BannerDetails medium>
        <Accent bold>50%</Accent> discount only valid for{" "}
        <Accent bold>00:15:49</Accent>
      </BannerDetails>
    </StyledBanner>
  );
}

export default Banner;
