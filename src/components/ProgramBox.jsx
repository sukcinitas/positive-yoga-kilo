import React from "react";
import styled from "styled-components";

import { SmallHeading, SmallestHeading } from "../shared/Heading";
import { Details } from "../shared/Details";
import Box from "../shared/Box";
import plan from "../assets/plan.svg";
import group from "../assets/Group.svg";
import shoe from "../assets/shoe.svg";
import diet from "../assets/diet.svg";
import whistle from "../assets/whistle.svg";
import smartwatch from "../assets/smartwatch.svg";
import bookcheck from "../assets/bookcheck.svg";

const info = [
  {
    point: "A personalized yoga program",
    details: "Completely safe and focused on your key goals",
    icon: plan,
  },
  {
    point: "Easy & enjoyable yoga workouts for your level",
    details: "Program adjusts to your level and pace",
    icon: group,
  },
  {
    point: "No special preparation needed",
    details:
      "Perfect for begginners! Requires no special preparation or equipment",
    icon: shoe,
  },
  {
    point: "Daily motivation & accountability",
    details:
      "Track your progress, develop a healthy routine, reach goals faster",
    icon: diet,
  },
  {
    point: "Browse from various yoga challenges",
    details:
      "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
    icon: whistle,
  },
  {
    point:
      "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
    details: "Easy access on any device",
    icon: smartwatch,
  },
  {
    point: "A complete guide to get started",
    details:
      "Best tips, guidelines, advice, and recommendations for successful practice",
    icon: bookcheck,
  },
];

export const ProgramList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media only screen and (min-width: 480px) {
    margin-top: 46px;
  }
`;

export const ProgramListItem = styled.li`
  display: flex;
  column-gap: 20px;
`;

export const Icon = styled.img`
  height: 48px;
`;

function ProgramBox() {
  return (
    <Box>
      <SmallHeading>What's in my program?</SmallHeading>
      <ProgramList>
        {info.map(({ point, details, icon }) => (
          <ProgramListItem>
            <Icon src={icon}></Icon>
            <div>
              <SmallestHeading>{point}</SmallestHeading>
              <Details dull left>
                {details}
              </Details>
            </div>
          </ProgramListItem>
        ))}
      </ProgramList>
    </Box>
  );
}

export default ProgramBox;
