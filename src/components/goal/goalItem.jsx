import React, { memo, useState, useCallback } from "react";
import styled from "styled-components";
import GoalHeader from "./goalHeader";
import TodoList from "../todo/todoList";
import { UseGoalDispatch } from "../../provider/goalContext";
import { UseTodoDispatch } from "../../provider/todoContext";

const GoalItem = ({ id, done, text, emoji }) => {
  const GoalItemBlock = styled.div`
    display: block;
    position: relative;
    width: 100%;
    align-items: center;
    padding: 12px;
  `;

  const [add, setAdd] = useState(false);
  const goalDispatch = UseGoalDispatch();
  const todoDispatch = UseTodoDispatch();

  const handleAdd = useCallback(() => {
    setAdd(!add);
  });
  const handleRemove = useCallback(() => {
    goalDispatch({ command: "REMOVE", id });
    todoDispatch({ command: "REMOVE_GOAL", goalId: id });
  });
  const handleSubmit = useCallback(() => {
    handleAdd();
  });
  return (
    <GoalItemBlock>
      <GoalHeader
        done={done}
        text={text}
        emoji={emoji}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
      <TodoList add={add} goalId={id} onSubmit={handleSubmit} />
    </GoalItemBlock>
  );
};

export default memo(GoalItem);
