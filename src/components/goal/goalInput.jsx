import React, { useState, useEffect, memo, useRef } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { UseGoalDispatch, UseGoalNextId } from "../../provider/goalContext";
import Emoji from "./emoji";
import Picker from "emoji-picker-react";

const GoalInput = () => {
  const BottomButton = styled.button`
    background: rgb(237, 187, 255);
    background: linear-gradient(
      90deg,
      rgba(237, 187, 255, 1) 0%,
      rgba(133, 179, 250, 1) 100%
    );
    &:hover {
      background: rgba(237, 187, 255, 1);
    }
    &:active {
      background: rgba(237, 187, 255, 1);
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 6rem;
    position: absolute;
    left: 50%;
    bottom: 0rem;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    ${(props) =>
      props.open &&
      css`
        background: #ff6b6b;
        &:hover {
          background: #ff8787;
        }
        &:active {
          background: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
      `}
  `;
  const InputFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
  `;

  const InputForm = styled.div`
    display: flex;
    position: relative;
    background: #f8f9fa;
    padding-left: 3.2rem;
    padding-top: 3.2rem;
    padding-right: 3.2rem;
    padding-bottom: 7.2rem;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
  `;

  const Input = styled.input`
    padding: 1.2rem;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 90%;
    outline: none;
    font-size: 1.8rem;
    box-sizing: border-box;
  `;

  const EmojiButton = styled.button`
    width: 10%;
    margin-right: 10px;
    height: auto;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    background-color: rgba(237, 187, 255, 0.5);
  `;
  const EmojiSelector = styled.div`
    position: absolute;
    left: 0;
    bottom: 20%;
  `;

  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [emoji, setEmoji] = useState("📌");

  const dispatch = UseGoalDispatch();
  const nextId = UseGoalNextId();
  const inputRef = useRef();

  const onToggle = () => setOpen(!open);
  const onSubmit = (emoji) => {
    const value = inputRef.current.value;
    dispatch({
      command: "CREATE",
      goal: {
        id: nextId.current,
        text: value,
        emoji: emoji,
      },
    });
    setOpen(false);
    nextId.current += 1;
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(emoji);
    }
  };
  const onOpenEmoji = () => {
    setToggle(!toggle);
  };
  const onEmojiClick = (event, emojiObject) => {
    setEmoji(emojiObject.emoji);
    setToggle(!toggle);
  };

  return (
    <>
      {open && (
        <InputFormPositioner>
          <InputForm>
            <EmojiButton onClick={onOpenEmoji}>
              <Emoji symbol={emoji} label="smile" size="18px" />
            </EmojiButton>
            <Input
              ref={inputRef}
              autoFocus
              placeholder="Hit the 'Enter' key after typing."
              onKeyPress={onKeyPress}
            />
          </InputForm>
        </InputFormPositioner>
      )}
      {open && toggle && (
        <EmojiSelector>
          <Picker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            disableSearchBar={true}
            groupNames={{ smileys_people: "PEOPLE" }}
            groupVisibility={{
              flags: false,
              animals_nature: false,
              food_drink: false,
              travel_places: false,
            }}
            native
          />
        </EmojiSelector>
      )}
      <BottomButton onClick={onToggle} open={open}>
        <MdAdd />
      </BottomButton>
    </>
  );
};

export default memo(GoalInput);
