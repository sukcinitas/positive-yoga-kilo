import React from "react";
import styled, { css } from "styled-components";

export const StyledSlider = styled.div`
  margin: -20px auto 40px;
  text-align: center;
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

function Slider() {
  return (
    <StyledSlider>
      <Ellipse active />
      <Ellipse />
      <Ellipse />
    </StyledSlider>
  );
}

export default Slider;
