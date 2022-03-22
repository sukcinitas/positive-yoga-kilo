import React from "react";
import styled from "styled-components";

import { SmallHeading } from "../shared/Heading";
import { StyledCheckCirceOutlineIcon } from "../shared/MaterialIcons";
import Box from "../shared/Box";
import Text from "../shared/Text";

const points = [
  "Each program adapts to your age or fitness level",
  "Mindful way to exercise and get real results",
  "Effective and long-term lasting results",
  "Suited activities that benefit both the mind and body",
  "Low-intensity but highly-effective workouts",
  "Extra attention to muscle, joint and back health",
];

export const Points = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Point = styled.li`
  display: flex;
  column-gap: 18px;
`;

export const PointsText = styled(Text)`
  font-size: 14px;
  color: var(--gray-2);
`;

function PointsBox() {
  return (
    <Box>
      <SmallHeading>Is Positive Yoga right for me?</SmallHeading>
      <Points>
        {points.map((point) => (
          <Point>
            <StyledCheckCirceOutlineIcon></StyledCheckCirceOutlineIcon>
            <PointsText>{point}</PointsText>
          </Point>
        ))}
      </Points>
    </Box>
  );
}

export default PointsBox;
