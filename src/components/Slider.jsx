import React from "react";
import styled, { css } from "styled-components";
import { stories } from "../util/info";

export const StyledSlider = styled.div`
  margin: 20px auto;
  text-align: center;

  @media only screen and (min-width: 980px) {
    display: none;
  }
`;

export const Ellipse = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: var(--white);
  border: 1px solid var(--dark-1);
  border-radius: 100%;
  margin: 2px;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--dark-1); ;
    `}
`;

function Slider({ activeIndex }) {
  return (
    <StyledSlider>
      {stories.map((_, index) => (
        <Ellipse key={index} active={activeIndex === index} />
      ))}
    </StyledSlider>
  );
}

export default Slider;
