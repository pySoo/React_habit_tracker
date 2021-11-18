import React from "react";
import styled, { css } from "styled-components";
import Emoji from "./emoji";
import { MdAdd } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

const GoalHeader = ({ done, text, emoji, onAdd, onRemove }) => {
  const HeaderBlock = styled.div`
    display: flex;
    width: fit-content;
    flex: 0 0 auto;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 3px 2px rgb(0 0 0 / 0.1);
    border: 1px solid lightgrey;
    border-radius: 7px;
    padding: 1.2rem;
    margin-bottom: 1rem;
  `;

  const GoalText = styled.div`
    flex: 1;
    color: rgb(68, 65, 65);
    font-size: 21px;
    font-weight: 500;
    margin-left: 5px;
    ${(props) =>
      props.done &&
      css`
        color: #ced4da;
      `}
  `;
  const Add = styled.div`
    display: flex;
    color: #dee2e6;
    font-size: 2.4rem;
    cursor: pointer;
    color: #ff6b6b;
    margin-left: 1rem;
    &:hover {
      transform: scale(1.3);
    }
    transition: 300ms all ease-in;
  `;
  const Remove = styled.div`
    display: flex;
    color: rgba(68, 65, 65, 0.3);
    font-size: 2.4rem;
    cursor: pointer;
    &:hover {
      color: #ff6b6b;
      transform: scale(1.1);
    }
    transition: 300ms all ease-in;
  `;

  return (
    <HeaderBlock>
      <Emoji symbol={emoji} label="check" padding={"1px"} size={"20px"} />
      <GoalText done={done}>{text}</GoalText>
      <Add onClick={onAdd}>
        <MdAdd />
      </Add>
      <Remove onClick={onRemove}>
        <FiDelete />
      </Remove>
    </HeaderBlock>
  );
};

export default GoalHeader;
