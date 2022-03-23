import React from "react";
import styled from "styled-components";

import { SmallHeading, SmallestHeading } from "../shared/Heading";
import { Details } from "../shared/Details";
import Box from "../shared/Box";
import { program } from "../util/info";

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
        {program.map(({ point, details, icon, id }) => (
          <ProgramListItem key={id}>
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
