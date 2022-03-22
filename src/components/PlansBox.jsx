import React from "react";
import styled, { css } from "styled-components";

import {
  StyledCheckCircleIcon,
  StyledCircleIcon,
} from "../shared/MaterialIcons";
import { SmallHeading, SmallestHeading } from "../shared/Heading";
import { Details, Accent } from "../shared/Details";
import Box from "../shared/Box";
import Tag from "../shared/Tag";
import Button from "../shared/Button";
import safeCheckout from "../assets/safe-checkout.png";

export const PlanCardList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const StyledPlanCard = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  border: 2px solid var(--gray-4);
  border-radius: 16px;
  padding: 16px;

  ${(props) =>
    props.active &&
    css`
      border: 2px solid var(--primary);
    `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const PlansWrapper = styled(Wrapper)`
  row-gap: 16px;
`;

export const Image = styled.img`
  align-self: center;
  width: 100%;
`;

export const PlanDetails = styled(Details)`
  color: var(--dark-1);
`;

function PlansBox() {
  return (
    <Box>
      <SmallHeading>
        Choose your plan ang get <span>7 days free trial</span>
      </SmallHeading>
      <PlansWrapper>
        <PlanCardList>
          <StyledPlanCard active={true}>
            <Wrapper>
              <SmallestHeading>
                6 month plan <Tag>Save 50%</Tag>
              </SmallestHeading>
              <PlanDetails left>
                <Accent big bold>
                  $9.99
                </Accent>{" "}
                / month
              </PlanDetails>
              <PlanDetails left>
                <Accent strikedthrough>$119.94</Accent>
                <Accent primary>$59.94</Accent> billed every 6 months
              </PlanDetails>
            </Wrapper>
            <StyledCheckCircleIcon />
          </StyledPlanCard>
          <StyledPlanCard active={false}>
            <Wrapper>
              <SmallestHeading>3 month plan</SmallestHeading>
              <PlanDetails left>
                <Accent big bold>
                  $14.99
                </Accent>{" "}
                / month
              </PlanDetails>
              <PlanDetails left>
                <Accent strikedthrough>$59.97</Accent>
                <Accent primary>$44.97</Accent> billed every 3 months
              </PlanDetails>
            </Wrapper>
            <StyledCircleIcon />
          </StyledPlanCard>
          <StyledPlanCard active={false}>
            <Wrapper>
              <SmallestHeading>1 month plan</SmallestHeading>
              <PlanDetails left>
                <Accent big bold>
                  $19.99
                </Accent>{" "}
                / month
              </PlanDetails>
              <PlanDetails left>Billed monthly</PlanDetails>
            </Wrapper>
            <StyledCircleIcon />
          </StyledPlanCard>
        </PlanCardList>
        <Button full>Get your plan</Button>
        <Details center>
          After 7 days free trial subscription payment is automatically charged
          from your account unless it is canceled at least 24 hours before the
          end of the trial period.
        </Details>
        <Details center>
          By choosing a payment method you agree to the{" "}
          <a href="/">T&amp;Cs </a> and <a href="/">Privacy Policy</a>
        </Details>
        <Image src={safeCheckout}></Image>
      </PlansWrapper>
    </Box>
  );
}

export default PlansBox;
