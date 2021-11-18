import React, { memo } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { UseTodoDispatch } from "../../provider/todoContext";

const TodoItem = ({ id, done, text }) => {
  const TodoItemBlock = styled.div`
    max-width: 100%;
    max-height: 100%inherit;
    display: flex;
    align-items: center;
    padding: 1.2rem 0 1.2rem 1.2rem;
    box-sizing: border-box;
  `;

  const CheckCircle = styled.div`
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ced4da;
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    cursor: pointer;
    ${(props) =>
      props.done &&
      css`
        border: 1px solid rgba(237, 187, 255, 1);
        color: rgba(237, 187, 255, 1);
      `}
  `;

  const Remove = styled.div`
    color: #dee2e6;
    font-size: 2.4rem;
    cursor: pointer;
    margin-left: 2rem;
    &:hover {
      color: #ff6b6b;
    }
    visibility: hidden;
  `;

  const TextBlock = styled.div`
    display: flex;
    align-items: center;
    &:hover {
      ${Remove} {
        visibility: visible;
      }
    }
  `;

  const TodoText = styled.div`
    flex: 1;
    font-size: 18px;
    color: #495057;
    ${(props) =>
      props.done &&
      css`
        color: #ced4da;
      `}
  `;
  const dispatch = UseTodoDispatch();
  const onToggle = () => dispatch({ command: "TOGGLE", id });
  const onRemove = () => dispatch({ command: "REMOVE", id });
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <TextBlock>
        <TodoText done={done}>{text}</TodoText>
        <Remove onClick={onRemove}>
          <MdDelete />
        </Remove>
      </TextBlock>
    </TodoItemBlock>
  );
};

export default memo(TodoItem);
