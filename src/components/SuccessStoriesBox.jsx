import React from "react";
import styled from "styled-components";

import { SmallCenteredHeading, SmallestHeading } from "../shared/Heading";
import { Details } from "../shared/Details";
import Stars from "./Stars";
import Slider from "./Slider.jsx";
import Text from "../shared/Text";
import Box from "../shared/Box";
import Button from "../shared/Button";
import { stories } from "../util/info";

const Image = styled.img`
  width: 50%;
`;

const StoryHeading = styled(SmallestHeading)`
  @media only screen and (min-width: 480px) {
    font-size: 15px;
  }
`;

const SuccessStory = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  width: 320px;
  border-radius: 16px;
  box-shadow: 0 16px 32px var(--shadow-3);
  padding: 16px;
`;

const SuccessStories = styled.div`
  display: flex;
  column-gap: 16px;
  overflow-x: auto;
  justify-content: flex-start;
  padding: 0 16px 40px; // depends on main padding, increase shadow visibility of children
  position: relative;
  left: -16px; // depends on main padding, increase shadow visibility of children
  width: 100vw;

  @media only screen and (min-width: 980px) {
    justify-content: center;
    padding: 0px 20px 40px;
  }
`;

function SuccessStoriesBox() {
  return (
    <Box>
      <SmallCenteredHeading>
        Hear success stories from our clients
      </SmallCenteredHeading>
      <SuccessStories>
        {stories.map(({ id, name, age, story, city, image }) => (
          <SuccessStory key={id}>
            <header>
              <StoryHeading>{`${name}, ${age}`}</StoryHeading>
              <Details dull>{city}</Details>
            </header>
            <Stars />
            <Image src={image}></Image>
            <Text dangerouslySetInnerHTML={{ __html: story }}></Text>
          </SuccessStory>
        ))}
      </SuccessStories>
      <Slider />
      <Button>Get my plan</Button>
    </Box>
  );
}

export default SuccessStoriesBox;
