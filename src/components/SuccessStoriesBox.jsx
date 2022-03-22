import React from "react";
import styled from "styled-components";

import { SmallCenteredHeading, SmallestHeading } from "../shared/Heading";
import { Details } from "../shared/Details";
import Stars from "./Stars";
import Slider from "./Slider.jsx";
import Text from "../shared/Text";
import Box from "../shared/Box";
import Button from "../shared/Button";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";

const stories = [
  {
    id: 1,
    name: "Emily",
    age: 28,
    city: "Delaware, NJ",
    story:
      "I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts.",
    image: image1,
  },
  {
    id: 2,
    name: "Kyle",
    age: 40,
    city: "Los Angeles",
    story:
      "I will be very straightforward - I hate sports and working out. <span>Positive Yoga</span> put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.",
    image: image2,
  },
  {
    id: 3,
    name: "Jesica",
    age: 51,
    city: "San Francisco, CA",
    story:
      "I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With <span>Positive Yoga</span> program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.",
    image: image3,
  },
];

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
