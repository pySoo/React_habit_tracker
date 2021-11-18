import React from "react";
import styled from "styled-components";
import GoalItem from "./goalItem";
import { UseGoalState } from "../../provider/goalContext";

const GoalList = (props) => {
  const goals = UseGoalState();
  const GoalListBlock = styled.div`
    flex: 1;
    padding: 2rem 3.2rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      height: 17%;
      background-color: rgba(237, 187, 255, 0.5);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  `;
  return (
    <GoalListBlock>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          text={goal.text}
          emoji={goal.emoji}
        />
      ))}
    </GoalListBlock>
  );
};

export default GoalList;
