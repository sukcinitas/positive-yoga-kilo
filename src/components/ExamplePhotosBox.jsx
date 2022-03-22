import React from "react";
import styled from "styled-components";

import { SmallHeading } from "../shared/Heading";
import Box from "../shared/Box";
import photo1 from "../assets/mob1.png";
import photo2 from "../assets/mob2.png";

export const ExamplePhotos = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  justify-content: center;
  column-gap: 12px;
  position: relative;
`;

export const ExamplePhoto = styled.img`
  max-width: 50%;
  &:nth-child(2) {
    margin-top: 30px;
  }
`;

export const ClipBackground = styled.div`
  position: absolute;
  top: 0;
  left: -16px; // depends on main padding
  right: -16px; // depends on main padding
  bottom: 0;
  background-color: var(--gray-6);
  clip-path: polygon(100% 50%, 100% 0, 0 50%, 0% 100%);
  z-index: -1;

  @media only screen and (min-width: 480px) {
    background-color: transparent;
  }
`;

function ExamplePhotosBox() {
  return (
    <Box>
      <SmallHeading>Star your yoga journey now!</SmallHeading>
      <ExamplePhotos>
        <ClipBackground />
        <ExamplePhoto src={photo1} />
        <ExamplePhoto src={photo2} />
      </ExamplePhotos>
    </Box>
  );
}

export default ExamplePhotosBox;
