import React from "react";
import styled from "styled-components";
import { UseTodoState } from "../../provider/todoContext";
import TodoItem from "./todoItem";
import TodoInput from "./todoInput";

const TodoList = ({ add, goalId, onSubmit }) => {
  const TodoListBlock = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%;
    left: 5%;
    top: 100%;
    overflow-y: auto;
  `;

  const todos = UseTodoState();
  return (
    <TodoListBlock>
      {todos.map(
        (todo) =>
          todo.goalId === goalId && (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              done={todo.done}
            />
          )
      )}
      {add && <TodoInput add={add} goalId={goalId} onSubmit={onSubmit} />}
    </TodoListBlock>
  );
};

export default TodoList;
