import React from "react";
import styled from "styled-components";

import SuccessStoriesBox from "../components/SuccessStoriesBox";
import PointsBox from "../components/PointsBox";
import ProgramBox from "../components/ProgramBox";
import PlansBox from "../components/PlansBox";
import ExamplePhotosBox from "../components/ExamplePhotosBox";
import FAQ from "../components/FAQ";
import { Heading, LargeHeading } from "../shared/Heading";
import { Details, Accent } from "../shared/Details";

const StyledCheckoutPage = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
  margin-bottom: 60px;

  @media only screen and (min-width: 480px) {
    margin: 30px 0 120px;
  }
`;

const CheckoutPageDetails = styled(Details)`
  color: var(--dark-1);

  @media only screen and (min-width: 480px) {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  row-gap: 40px;
  column-gap: 32px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
  }
`;

const Width = styled.div`
  max-width: 736px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

function CheckoutPage() {
  return (
    <StyledCheckoutPage>
      <Width>
        <CheckoutPageDetails>
          Over <Accent bold>52 147</Accent> plans ordered.
        </CheckoutPageDetails>
        <LargeHeading>Get acces to your yoga program now!</LargeHeading>
        <Wrapper>
          <PlansBox />
          <ProgramBox />
        </Wrapper>
      </Width>

      <Wrapper>
        <SuccessStoriesBox></SuccessStoriesBox>
      </Wrapper>

      <Width>
        <Wrapper>
          <ExamplePhotosBox />
          <PointsBox />
        </Wrapper>
        <Wrapper>
          <FAQ />
        </Wrapper>
        <Heading>Start your yoga program today!</Heading>
        <Wrapper>
          <PlansBox />
          <ProgramBox />
        </Wrapper>
      </Width>
    </StyledCheckoutPage>
  );
}

export default CheckoutPage;
