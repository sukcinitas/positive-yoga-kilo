import React, { useState } from "react";
import styled, { css } from "styled-components";

import Text from "../shared/Text";
import { SmallCenteredHeading, SmallestHeading } from "../shared/Heading";
import {
  StyledArrowUpIcon,
  StyledArrowDownIcon,
} from "../shared/MaterialIcons";
import Box from "../shared/Box";
import Button from "../shared/Button";

const questions = [
  {
    id: 1,
    question: "What happens after I order?",
    answer:
      "After you place your order, we get to work!<br>Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recomendations on how to improve.",
  },
  {
    id: 2,
    question: "Where I can access my plan?",
    answer:
      "Your plan will be accessible in <span>Positive Yoga's</span> web app with a special link generated after your purchase.",
  },
  {
    id: 3,
    question: "How can I cancel my subscription?",
    answer:
      "You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app",
  },
  {
    id: 4,
    question: "Why this program is paid?",
    answer:
      "We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! ",
  },
];

const Questions = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 0px 0px 40px;
`;

const StyledQuestion = styled.details`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--shadow-3);
  border-radius: 16px;
  padding: 18px;
  row-gap: 18px;
`;

const QuestionText = styled(Text)`
  color: var(--gray-3);
  font-size: 14px;
  padding-top: 18px;

  ${(props) =>
    props.isClosed &&
    css`
      display: none;
    `}
`;

const Wrapper = styled.summary`
  display: flex;
  justify-content: space-between;
`;

function Question({ item: { question, answer } }) {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <StyledQuestion>
      <Wrapper>
        <SmallestHeading>{question}</SmallestHeading>
        {isClosed ? (
          <StyledArrowDownIcon onClick={() => setIsClosed(false)} />
        ) : (
          <StyledArrowUpIcon onClick={() => setIsClosed(true)} />
        )}
      </Wrapper>
      <QuestionText
        isClosed={isClosed}
        dangerouslySetInnerHTML={{ __html: answer }}
      ></QuestionText>
    </StyledQuestion>
  );
}

function FAQ() {
  return (
    <Box>
      <SmallCenteredHeading>Frequently Asked Questions</SmallCenteredHeading>
      <Questions>
        {questions.map((question) => (
          <Question key={question.id} item={question}></Question>
        ))}
      </Questions>
      <Button>Get my plan</Button>
    </Box>
  );
}

export default FAQ;
