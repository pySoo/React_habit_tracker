import React, { useRef } from "react";
import styled from "styled-components";
import { UseTodoDispatch, UseTodoNextId } from "../../provider/todoContext";
import { MdCheckCircle } from "react-icons/md";
import { FcNext } from "react-icons/fc";

const TodoInput = ({ add, goalId, onSubmit }) => {
  const InputBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0 1.2rem 0.5rem;
    margin-left: 0.8rem;
  `;
  const Input = styled.input`
    width: 100%;
    margin: 0 1rem;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    outline: none;
    font-size: 1.8rem;
    box-sizing: border-box;
  `;
  const CheckCircle = styled.div`
    &:hover {
      color: rgba(133, 179, 250, 0.5);
    }
    &:active {
      color: rgba(133, 179, 250, 0.5);
    }
    cursor: pointer;
    color: rgba(133, 179, 250, 1);
    font-size: 2.4rem;
    margin-right: 1rem;
  `;
  const InputIcon = styled.span`
    font-size: 1.6rem;
    color: "#ff6b6b";
  `;

  const inputRef = useRef();
  const dispatch = UseTodoDispatch();
  const nextId = UseTodoNextId();

  const handleAdd = () => {
    const value = inputRef.current.value;
    if (value) {
      dispatch({
        command: "CREATE",
        todo: {
          id: nextId.current,
          goalId: goalId,
          text: value,
          done: false,
        },
      });
      nextId.current += 1;
    }
    add = false;
    onSubmit();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };
  return (
    <InputBlock>
      <InputIcon>
        <FcNext />
      </InputIcon>
      <Input ref={inputRef} onKeyPress={onKeyPress} />
      <CheckCircle onClick={handleAdd}>
        <MdCheckCircle />
      </CheckCircle>
    </InputBlock>
  );
};

export default TodoInput;
